import { refs } from './refs';
import Movies from './movies';
import {
  addClassIsHidden,
  removeClassIsHidden,
  queueBtnDisabledTrue,
  watchedBtnDisabledTrue,
  addClassActiveOnQueueBtn,
  removeClassActiveOnWatchedBtn,
} from './utils';

const films = new Movies({
  url: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'f23afa13cf10e0a13fa8c4a5195ece8b',
  },
});

const savedWatched = localStorage.getItem('Watched');
const parcedWatchedFilms = JSON.parse(savedWatched);

const savedQueue = localStorage.getItem('Queue');
const parcedQueueFilms = JSON.parse(savedQueue);

if (savedQueue === null && savedWatched === null) {
  queueBtnDisabledTrue();
  watchedBtnDisabledTrue();
  removeClassIsHidden();
} else if (savedWatched === null) {
  watchedBtnDisabledTrue();
  removeClassActiveOnWatchedBtn();
  removeClassIsHidden();
} else {
  addClassIsHidden();
}

if (savedWatched === null) {
  addClassActiveOnQueueBtn();
  return onQueueBtnClick();
}

refs.watchedBtn.addEventListener('click', onWatchBtnClick);
onWatchBtnClick(); // вызов функции чтобы на странице библиотеки сразу показывались фильмы watched

function onWatchBtnClick() {
  try {
    const arr = parcedWatchedFilms.reduce((acc, id) => {
      films.url = `https://api.themoviedb.org/3/movie/${id}`;
      const result = films.fetchMovies();
      acc.push(result);
      return acc;
    }, []);

    Promise.all(arr)
      .then(value => {
        isSendToTheLibrary(value);
      })
      .catch(error => console.log(error));
  } catch (error) {
    console.log(error);
  }
}

export default onWatchBtnClick;

if (savedQueue === null) {
  queueBtnDisabledTrue();
  return removeClassIsHidden();
}

addClassIsHidden();
refs.queueBtn.addEventListener('click', onQueueBtnClick);

function onQueueBtnClick() {
  try {
    const arr = parcedQueueFilms.reduce((acc, id) => {
      films.url = `https://api.themoviedb.org/3/movie/${id}`;
      const result = films.fetchMovies();
      acc.push(result);
      return acc;
    }, []);

    Promise.all(arr)
      .then(value => {
        isSendToTheLibrary(value);
      })
      .catch(error => console.log(error));
  } catch (error) {}
}

function isSendToTheLibrary(value) {
  const isLibraryEmpty = document.querySelector('.message-wrap');
  value.length === 0
    ? isLibraryEmpty.classList.remove('movies-is-true')
    : isLibraryEmpty.classList.add('movies-is-true');

  refs.moviesList.innerHTML = renderMovie(value);
}

function renderMovie(movies) {
  return movies
    .map(
      ({
        poster_path,
        original_title,
        release_date,
        genres,
        id,
        vote_average,
      }) => {
        return `
      <li class="movie__item" data-id="${id}">
  <a class="movie__link" data-id="${id}" href="">
  <img src="https://image.tmdb.org/t/p/w342${poster_path}" class="movie__image" data-id="${id}" alt="Poster movie ${original_title}"  width="" height="" />
    <div class="movie__description" data-id="${id}">
      <p class="movie__title" data-id="${id}">${original_title}</p>
      <p class="movie__info" data-id="${id}">${genres
          .map(elem => elem.name)
          .join(', ')}  
      <span class="movie__breacker" data-id="${id}"> | </span>
    <span class="movie__year" data-id="${id}">${release_date
          .split('-')
          .slice(0, 1)
          .join('')}</span><span class="movie__rating">${vote_average.toFixed(
          1
        )}</span></p>
    </div>
  </a>
</li>`;
      }
    )
    .join('');
}
