// import {
//     searchLocalQueue,
//     searchLocalWatch,
//     classListWatch,
//     classListQueue,
// } from './add_local_storage';

// import {
//     processingGenre,
//     processingNameFilm,
//     processingPoster,
//     processingVoteAverage,
// } from './renderMoviesTrending';

// import { addLocal } from './add_local_storage';
// import { backdropEl, filmsListRef, closeBtnRef, modalFilm } from './refs';
// import { onCloseCardBtnClick, FilmsInLocalStorage } from './usersLib';

//   ////////////////////////////////Получаем данные с Локального Хранилища
// let watchedStorageLength = 0;
// let queueStorageLength = 0;

// function dataInLocalStorage() {
//     let dataInLocalStorage = localStorage.getItem('dataInApi');
//     let parsedDataInLocalStorage = '';

//     try {
//         return (parsedDataInLocalStorage = JSON.parse(dataInLocalStorage));
//     } catch (error) {
//         console.warn('Ошибка во время парса данных с локального хранилища');
//     }
// }
//   //////////////////////////////////////////////////////////

//     filmsListRef.addEventListener('click', onFilmCardClick);
//     closeBtnRef.addEventListener('click', onCloseBtnClick);

//     function onFilmCardClick(e) {
//         if (e.target.nodeName !== 'IMG') {
//             return;
//         }
//     if (localStorage.getItem('Watched')) {
//         watchedStorageLength = FilmsInLocalStorage('Watched').length;
//     }
//     if (localStorage.getItem('Queue')) {
//         queueStorageLength = FilmsInLocalStorage('Queue').length;
//     }

//     backdropEl.classList.remove('is-hidden');
//     modalFilm.classList.remove('is-hidden');
//     document.body.style.overflow = 'hidden';
//     document.addEventListener('keydown', onEscBtnPress);
//     document.addEventListener('click', onBackdropClick);
//     /////////Проверка id фильма по которому кликнули
//     let idImage = e.target.dataset.id;
//     let idImageNumber = Number(idImage);

//     /////Данные с Локального хранилища
//     let dataLocalStorage = dataInLocalStorage();

//     // console.log(dataLocalStorage);
//     let changeFilm = dataLocalStorage.find(film => film.id === idImageNumber);

//     ///////////////Переменные для отрисовки Модалки
//     let poster_path = processingPoster(changeFilm.poster_path);
//     let title = processingNameFilm(changeFilm.title, changeFilm.name);
//     let vote_average = processingVoteAverage(changeFilm.vote_average);
//     let vote_count = changeFilm.vote_count;
//     let popularity = changeFilm.popularity;
//     let genre_ids = processingGenre(changeFilm.genre_ids);
//     let overview = changeFilm.overview;
//     let btn_search = '';

//     modalFilm.insertAdjacentHTML(
//         'afterbegin',
//         makeFilmModalMarkup(
//             poster_path,
//             title,
//             vote_average,
//             vote_count,
//             popularity,
//             genre_ids,
//             overview,
//             btn_search
//         )
//     );

//     const obj = addLocal(changeFilm);

//     const btnWatch = document.querySelector('.btn__watch');
//     const btnQueue = document.querySelector('.btn__queue');

//     btnWatch.classList.remove('btn__watch__remove');
//     btnQueue.classList.remove('btn__queue__remove');
//     searchLocalQueue(obj, btnQueue, btnWatch);
//     searchLocalWatch(obj, btnWatch, btnQueue);
//     btnWatch.addEventListener('click', e => {
//         classListWatch(btnWatch, obj);
//     });
//     btnQueue.addEventListener('click', () => {
//         classListQueue(btnQueue, obj);
//     });
// }

export default function makeFilmModalMarkup(
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    genre_ids,
    overview,
    btn_search
    ) {
    return `
    <div class="film__image">${poster_path !== null
        ? `<img class="image" src="${poster_path}" alt=${title}/>`
        : ''
    }}
      </div>
      <div class="film__information">
        <div>
          <h2 class="film__title">${title}</h2>
          <ul>
            <li class="film__item">
              <p class="film__details">Vote / Votes</p>
              <p class="film__info--uper">
                <span class="film__rating--orange">${vote_average}</span>
                <span class="film__rating--divider"> / </span>
      <span class="vote-count">${vote_count}</span>
              </p>
            </li>
            <li class="film__item">
              <p class="film__details">Popularity</p>
              <p class="film__info--uper">${popularity}</p>
            </li>
            <li class="film__item">
              <p class="film__details">Original title</p>
              <p>${title}</p>
            </li>
            <li class="film__item">
              <p class="film__details">Genre</p>
              ${
                genre_ids.length !== 0
                  ? `<p class="film__info">${genre_ids}</p>`
                  : `<p class="film__info">No information</p>`
              }
            </li>
          </ul>
        </div>
        <div>
          <h3 class="film__about__title">About</h3>
          ${
            overview
              ? `<p class="film__about__text">${overview}</p>`
              : `<p class="film__about__text">No information</p>`
          }
        </div>
        <div class="film__button__wrapper">
          <button type="button" class="film__button btn__watch btn__watch__remove">Add to watched</button>
          <button type="button" class="film__button btn__queue btn__queue__remove">Add to queue</button>
         ${btn_search}
          </div>
        </div>`;
  
  
  }
  
//   //Функція закриття по кнопці
//   function onCloseBtnClick() {
//     const filmImg = document.querySelector('.film__image');
//     const filmInfo = document.querySelector('.film__information');
//     filmImg.remove();
//     filmInfo.remove();
//     if (
//       filmsListRef.dataset.library === 'library' &&
//       (watchedStorageLength !== FilmsInLocalStorage('Watched').length ||
//         queueStorageLength !== FilmsInLocalStorage('Queue').length)
//     ) {
//       onCloseCardBtnClick();
//     }
//     backdropEl.classList.add('is-hidden');
//     modalFilm.classList.add('is-hidden');
//     document.body.style.overflow = 'scroll';
//     document.removeEventListener('keydown', onEscBtnPress);
//     document.removeEventListener('click', onBackdropClick);
//   }
  
//   //Функція закриття по ESC
//   function onEscBtnPress(e) {
//     if (e.code === 'Escape') {
//       onCloseBtnClick();
//     }
//   }
  
//   //Функція закриття модалки поза межами модалки
//   function onBackdropClick(e) {
//     if (e.target === backdropEl) {
//       onCloseBtnClick();
//     }
//   }










