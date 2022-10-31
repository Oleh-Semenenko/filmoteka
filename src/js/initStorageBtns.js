// import localStorageApi from './localStorageAPI';
import LocalStorageAPI from './LocalStorageAPI';

const localStorageApi = new LocalStorageAPI();

export default function initStorageBtns() {
  const storageEl = document.querySelector('.storage');
  const movieId = document.querySelector('.modal').dataset.id;

  checkStorage(storageEl);
  storageEl.addEventListener('change', onStorageBtnClick);

  function onStorageBtnClick(e) {
    const storageKey = e.target.value;

    const action = e.target.checked ? 'add' : 'remove';

    localStorageApi.getMovies(storageKey);
    makeActionInStorage({ storageKey, movieId, action });
  }

  function checkStorage(storageEl) {
    const btnsEl = storageEl.querySelectorAll('[type=checkbox]');

    btnsEl.forEach(element => {
      const storageKey = element.value;

      const arr = localStorageApi.load(storageKey);
      if (0 <= arr.indexOf(movieId)) element.checked = 'true';
    });
  }
}

function makeActionInStorage({ storageKey, movieId, action }) {
  if (action === 'add') localStorageApi.addMovie(storageKey, movieId);
  if (action === 'remove') localStorageApi.removeMovie(storageKey, movieId);
}
