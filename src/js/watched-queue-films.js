import { refs } from './refs';
import Movies from './Movies';

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

if (!savedWatched || parcedWatchedFilms.length === 0) {
  return;
} else {
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
          refs.moviesList.innerHTML = renderMovie(value);
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }
}

export default onWatchBtnClick;

if (!savedQueue || parcedWatchedFilms.length === 0) {
  return;
} else {
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
          refs.moviesList.innerHTML = renderMovie(value);
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }
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
        console.log(genres);
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
          .join(
            ''
          )}</span><span class="movie__rating">${vote_average}</span></p>
    </div>
  </a>
</li>`;
      }
    )
    .join('');
}
