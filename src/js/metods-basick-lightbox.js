const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
import getDataTrailerMovie from './get-dta-trailer-movie';
import onModalTrailerMovie from './on-modal-trailer-movie';

import initStorageBtns from './init-storage-btns';
import svg from '../images/symbol-defs.svg';
import imgCard from '../images/poster-placeholder.png';
import { showModal, closeModal } from './stop-scrol-when-modal-open';

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

  const hasTrailer = dataOfTrailer.some(element => element.type === 'Trailer');

  const instance = basicLightbox.create(
    `
    <div class="modal js-modal-movie" data-id="${id}">
        <button type="button" class="modal__close-btn">
            <svg class="modal__icon" width="14" height="14">
                <use href="${svg}#icon-close-black"></use>
            </svg>
          </button>
          <div class="film__image">
          ${
            poster_path
              ? `<img
                class="image"
                src="https://image.tmdb.org/t/p/w342${poster_path}"
                alt="${title}"
                data-movieid="${id}"
              />`
              : `<img
                class="image"
                src="${imgCard}"
                alt="${title}"
                data-movieid="${id}"
              />`
          }
              
                ${
                  hasTrailer
                    ? ` <button
                  // type="button"
                  // class="film__button btn__trailer  js-btn-modal-trailer">
                    <svg class="" width="54" height="54">
                      <use href="${svg}#icon-play"></use>
                    </svg>
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
                <span class="film__rating--orange" data-id=${id}>${vote_average.toFixed(
      1
    )}</span>
                <span class="film__rating--divider"> / </span>
      <span class="vote-count" data-id=${id}>${vote_count}</span>
              </p>
            </li>
            <li class="film__item">
              <p class="film__details">Popularity</p>
              <p class="film__info--uper" data-id=${id}>${popularity.toFixed(
      0
    )}</p>
            </li>
            <li class="film__item">
              <p class="film__details">Original title</p>
              <p data-id=${id}>${title}</p>
            </li>
            <li class="film__item">
              <p class="film__details">Genre</p>
              <p class="film__info" data-id=${id}>${genres
      .map(elem => elem.name)
      .join(', ')}</p>
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

            <ul class="storage">
              <li class="storage__item">
                  <label class="storage__label">
                      <input type="checkbox" value="Watched" class="storage__input visually-hidden" />
                      <span class="storage__btn" id="togle-watched" style="font-size: 10px">Add to Watched</span>
                  </label>
              </li>
              <li class="storage__item">
                  <label class="storage__label ">
                      <input type="checkbox" value="Queue" class="storage__input visually-hidden" />
                      <span class="storage__btn" id="togle-queue" style="font-size: 10px">Add to Queue</span>
                  </label>
              </li>
            </ul>
          </div>
        </div>`,
    {
      onShow: instance => {
        showModal();
        document.addEventListener('keydown', e =>
          closeKeyDownKeyEsc(e, instance)
        );
        const closeBtn = instance.element().querySelector('.modal__close-btn');
        closeBtn.addEventListener('click', e => instance.close());
      },
      onClose: instance => {
        closeModal();
        document.removeEventListener('keydown', e =>
          closeKeyDownKeyEsc(e, instance)
        );
      },
    }
  );

  instance.show(initStorageBtns);

  if (hasTrailer) {
    const btnModalTrailerEl = document.querySelector('.js-btn-modal-trailer');
    btnModalTrailerEl.addEventListener('click', () =>
      onModalTrailerMovie(instance)
    );
  }
}

function closeKeyDownKeyEsc(e, instance) {
  if (e.code === 'Escape') {
    instance.close();
  }
}
