import Movies from './movies';
import openModalOnClick from './metods-basick-lightbox';
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

  if (!id) return;
  try {
    const data = await getMovieInfo.fetchMovies();
    openModalOnClick(data);
  } catch (error) {
    console.log(error.message);
  }
}
