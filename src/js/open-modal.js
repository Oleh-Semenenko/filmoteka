import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Movies from './Movies';
import openModalOnClick from './metodsBasicklightbox';
import { refs } from './refs.js';

refs.moviesList.addEventListener('click', openModal);
if (refs.swiper) {
  refs.swiper.addEventListener('click', openModal);
}

async function openModal(e) {
  e.preventDefault();
  const id = e.target.dataset.id;

  const getMovieInfo = new Movies({
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: { api_key: '084c550b6f1767443109bcf4bcaee21b' },
  });

  try {
    const data = await getMovieInfo.fetchMovies();
    openModalOnClick(data);
  } catch (error) {
    return Notify.failure(error.message);
  }
}
