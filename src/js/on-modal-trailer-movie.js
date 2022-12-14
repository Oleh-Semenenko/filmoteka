const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
import getDataTrailerMovie from './get-dta-trailer-movie';
import svg from '../images/symbol-defs.svg';
import { showModal, closeModal } from './stop-scrol-when-modal-open';

const close = `<svg height="30" width="30" class="trailer__svg"><use href="${svg}#icon-close-black"></use></svg>`;

async function onModalTrailerMovie(instance) {
  const imgEl = document.querySelector('[data-movieid]');
  const id = imgEl.dataset.movieid;

  try {
    const dataOfTrailer = await getDataTrailerMovie(id);
    const { key } = dataOfTrailer.find(element => element.type === 'Trailer');

    instance.close();

    const instanceTrailer = basicLightbox.create(
      `
       
      <div class="trailer">
    <button class="trailer__button-close" type="button">
    ${close}
    </button>
          <iframe
        class="trailer__video"
        src="https://www.youtube.com/embed/${key}"
        title="YouTube video player"
        frameborder="0"
      
        allowfullscreen  allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope"
        width="100%"
        height="100%"
      ></iframe>
    </div>
    `
    );

    instanceTrailer.show();
    showModal();

    const trailerBtnClose = document.querySelector('.trailer__button-close');

    trailerBtnClose.addEventListener('click', () => {
      closeModal();
      instanceTrailer.close();
      instance.show();
    });
  } catch (error) {
    console.log(error.message);
  }
}

export default onModalTrailerMovie;
