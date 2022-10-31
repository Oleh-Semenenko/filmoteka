const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
import { refs } from "./refs";


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

  const instance = basicLightbox.create(
    `
    <div class="modal">
        <button type="button" class="modal__close-btn">
            <svg class="" width="14" height="14">
                <use href="./images/symbol-defs.svg#icon-close-black"></use>
            </svg>
        </button>
      <div class="film__image">
      <img class="image" src="https://image.tmdb.org/t/p/w342${poster_path}" alt=${title} data-id=${id}/>
      <button type="button" class="film__button btn__trailer">Watch trailer</button>
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
        <div class="button-wrapper">
          <button type="button" class="film__button btn__watch btn__watch__remove">Add to watched</button>
          <button type="button" class="film__button btn__queue btn__queue__remove">Add to queue</button>
          </div>
        </div>
        </div>`,
    {
      onShow: instance => {
        showModal();
        document.addEventListener('keydown', e =>
          closeKeyDownKeyEsc(e, instance)
        );
      },
      onClose: instance => {
        closeModal();
        document.removeEventListener('keydown', e =>
          closeKeyDownKeyEsc(e, instance)
        );
      },  
    }
  );

  instance.show();
}

function closeKeyDownKeyEsc(e, instance) {
  if (e.code === 'Escape') {
    instance.close();
  }
}

function showModal() {
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');

  refs.body.style.position = 'fixed';
  refs.body.style.top = `-${scrollY}`;
  refs.body.style.right = `0`;
  refs.body.style.left = `0`;
  refs.body.style.paddingRight = `20px`;
}

function closeModal() {
  const scrollY = refs.body.style.top;
  refs.body.style.position = '';
  refs.body.style.top = '';
  refs.body.style.paddingRight = `0`;
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty(
    '--scroll-y',
    `${window.scrollY}px`
  );
});


