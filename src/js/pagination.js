import Pagination from 'tui-pagination';
import renderMarkupStartMoviesList from './renderMarkupStartMoviesList';
import { refs } from './refs';
import { movies } from './Movies';

const arrowLeft =
  '<button class="button" type="button"><svg height="16" width="16" viewBox="0 0 24 24"><path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path></svg></button>';
const arrowRight =
  '<button class="button" type="button"><svg height="16" width="16" viewBox="0 0 24 24"><path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path></svg></button>';

const options = {
  totalItems: 100,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: false,

  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<button class="button" type="button">{{page}}</button>',
    currentPage:
      '<button class="button selected" type="button"><strong class="tui-page-btn tui-is-selected">{{page}}</strong></button>',
    moveButton(type) {
      if (type.type === 'first') {
        return arrowLeft;
      } else if (type.type === 'last') {
        return arrowRight;
      } else {
        return '<span></span>';
      }
    },
    disabledMoveButton(type) {
      if (type.type === 'first') {
        return arrowLeft;
      } else if (type.type === 'last') {
        return arrowRight;
      } else {
        return '<span></span>';
      }
    },
    moreButton:
      '<button class="button" type="button">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</button>',
  },
};

export const pagination = new Pagination('tui-pagination-container', options);

pagination.on('beforeMove', event => {
  const currentPage = event.page;

  fetchData(currentPage);
});

const LOCALSTORAGE_KEY = 'current-page';

const localStorageCurrentPage = localStorage.getItem(LOCALSTORAGE_KEY);

if (localStorageCurrentPage) {
  pagination.movePageTo(localStorageCurrentPage);
} else {
  renderMarkupStartMoviesList();
}

async function fetchData(page) {
  movies.updatePageNumber(page);
  const data = await movies.fetchMovies();

  const markup = movies.renderMovieCard(data.results);
  refs.moviesList.innerHTML = markup;

  localStorage.setItem(LOCALSTORAGE_KEY, page);
}
