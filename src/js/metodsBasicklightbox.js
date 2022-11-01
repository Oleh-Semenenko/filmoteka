const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
import getDataTrailerMovie from './getDataTrailerMovie';
import onModalTrailerMovie from './onModalTrailerMovie';
// import makeFilmModalMarkup from './modal-film';

const btn = document.querySelector('.template');

export default async function openModalOnClick(data) {
  const {
    id,
    original_title,
    vote_average,
    vote_count,
    popularity,
    genres,
    poster_path,
    tagline,
    title,
    overview,
  } = await data;

  const dataOfTrailer = await getDataTrailerMovie(id);
  // console.log(dataOfTrailer);
  const hasTrailer = dataOfTrailer.some(element => element.type === 'Trailer');
  // console.log(hasTrailer);

  const instance = basicLightbox.create(
    `
    <div class="modal js-modal-movie">
        <button type="button" class="modal__close-btn">
            <svg class="modal__icon" width="14" height="14">
                <use href="../images/symbol-defs.svg#icon-close-black"></use>
            </svg>
        </button>
      
        <div class="film__image">
      <img class="image" src="${poster_path}" alt="${title}" data-movieid="${id}"/>
     ${
       hasTrailer
         ? ` <button
           type="button"
           class="film__button btn__trailer  js-btn-modal-trailer"
         >
           Watch trailer
         </button>`
         : ''
     }
      
      </div>
      <div class="film__information">
          <h2 class="film__title" data-id=${id}>${title}</h2>
          <ul class="film__list">
            <li class="film__item">
              <p class="film__details">Vote / Votes</p>
              <p class="film__info--uper">
                <span class="film__rating--orange" data-id=${id}>${vote_average}</span>
                <span class="film__rating--divider"> / </span>
      <span class="vote-count" data-id=${id}>${vote_count}</span>
              </p>
            </li>
            <li class="film__item">
              <p class="film__details">Popularity</p>
              <p class="film__info--uper" data-id=${id}>${popularity}</p>
            </li>
            <li class="film__item">
              <p class="film__details">Original title</p>
              <p data-id=${id}>${title}</p>
            </li>
            <li class="film__item">
              <p class="film__details">Genre</p>
              <p class="film__info" data-id=${id}>${genres}</p>
            </li>
          </ul>
        <div class="film__about">
          <h3 class="film__about-title">About</h3>
          ${
            overview
              ? `<p class="film__about-text" data-id=${id}>${overview}</p>`
              : `<p class="film__about-text">No information</p>`
          }
        </div>
        <div class="button-wrapper">
          <button type="button" class="film__button btn__watch btn__watch__remove">Add to watched</button>
          <button type="button" class="film__button btn__queue btn__queue__remove">Add to queue</button>
          </div>
        </div>
     </div>
  </div>
     `,
    {
      onShow: instance => {
        document.addEventListener('keydown', e =>
          closeKeyDownKeyEsc(e, instance)
        );
      },
      onClose: instance => {
        document.removeEventListener('keydown', e =>
          closeKeyDownKeyEsc(e, instance)
        );

        btnModalTrailerEl.removeEventListener('click', e =>
          onModalTrailerMovie(instance)
        );
      },
    }
  );

  instance.show();

  const btnModalTrailerEl = document.querySelector('.js-btn-modal-trailer');
  btnModalTrailerEl.addEventListener('click', () =>
    onModalTrailerMovie(instance)
  );
}

function closeKeyDownKeyEsc(e, instance) {
  if (e.code === 'Escape') {
    instance.close();
  }
}
