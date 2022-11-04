import LocalStorageAPI from './local-storage-api';

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
      if (0 <= arr.indexOf(movieId)) {
        element.checked = 'true';

        return element.checked ? watched(storageKey) : queue(storageKey);
      }
    });
  }
}

function makeActionInStorage({ storageKey, movieId, action }) {
  if (action === 'add') {
    localStorageApi.addMovie(storageKey, movieId);
    watched(storageKey);
    return;
  }
  localStorageApi.removeMovie(storageKey, movieId);
  queue(storageKey);
}

function watched(storageKey) {
  const togleWatched = document.querySelector('#togle-watched');
  const togleQueue = document.querySelector('#togle-queue');

  storageKey === 'Watched'
    ? (togleWatched.textContent = 'Remove from Watched')
    : (togleQueue.textContent = 'Remove from Queue');
}

function queue(storageKey) {
  const togleWatched = document.querySelector('#togle-watched');
  const togleQueue = document.querySelector('#togle-queue');

  storageKey === 'Queue'
    ? (togleQueue.textContent = 'Add to Queue')
    : (togleWatched.textContent = 'Add to Watched');
}
