import { Notify } from 'notiflix/build/notiflix-notify-aio';
import GetPrimoryInfoMovie from './API-GET-DETALS-MOVIE';
import openModalOnClick from './metodsBasicklightbox';
import { refs } from './refs.js';

const getMovieInfo = new GetPrimoryInfoMovie();

refs.moviesList.addEventListener('click', openModal);


function openModal(e) {
  e.preventDefault();
  const id = Number(e.target.dataset.id);

  const data = getMovieInfo.fetchMovie(id);
  try {
    openModalOnClick(data);
  } catch (error) {
    return Notify.failure(error.message);
  }
}


