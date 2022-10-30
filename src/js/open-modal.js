import GetPrimoryInfoMovie from './API-GET-DETALS-MOVIE';
import openModalOnClick from './metodsBasicklightbox';
import { refs } from './refs.js';

const getMovieInfo = new GetPrimoryInfoMovie();

refs.gallery.addEventListener('click', openModal);

async function openModal(e) {
  e.preventDefault();
  const id = Number(e.target.dataset.id);

  const data = await getMovieInfo.fetchMovie(id);
  try {
    console.log(data);
    openModalOnClick(data);
  } catch (error) {}
  //   console.log(data);
}
