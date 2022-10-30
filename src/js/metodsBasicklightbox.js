const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';

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
      <div class="movie__item" data-id="${id}">
  <img src="${poster_path}" class="movie__image" data-id="${id}" alt="Poster movie"  width="" height="" />
    <div class="movie__description" data-id="${id}">
      <h2 class="movie__title" data-id="${id}">${title}</h2>
      <p class="movie__info" data-id="${id}">${vote_count}</p>
      <p class="movie__info" data-id="${id}">${popularity}</p>
      <p class="movie__info" data-id="${id}">${original_title}</p>
      <p class="movie__info" data-id="${id}">${genres
      .map(elem => elem.name)
      .join(', ')}</p>
        <p class="movie__info" data-id="${id}">${overview}</p>
    </div>
  </a>
</div>`,
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
