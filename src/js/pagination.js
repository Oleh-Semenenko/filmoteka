import Pagination from 'tui-pagination';
import renderMarkupStartMoviesList from './renderMarkupStartMoviesList';
import { refs } from './refs';
import { movies } from './Movies';
import svg from '../images/symbol-defs.svg';

const arrowLeft = `<svg height="16" width="16"><use href="${svg}#icon-arrow-left"></use></svg>`;
const arrowRight = `<svg height="16" width="16"><use href="${svg}#icon-arrow-right"></use></svg>`;

const options = {
  totalItems: 1000,
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
    moveButton({ type }) {
      if (type === 'first') {
        return '<button class="button" type="button">first</button>';
      } else if (type === 'last') {
        return '<button class="button" type="button">last</button>';
      } else if (type === 'prev') {
        return (
          '<button class="button" type="button">' + arrowLeft + '</button>'
        );
      } else {
        return (
          '<button class="button" type="button">' + arrowRight + '</button>'
        );
      }
    },
    disabledMoveButton({ type }) {
      if (type === 'first') {
        return '<button class="button disabled" type="button">first</button>';
      } else if (type === 'last') {
        return '<button class="button disabled" type="button">last</button>';
      } else if (type === 'prev') {
        return (
          '<button class="button disabled" type="button">' +
          arrowLeft +
          '</button>'
        );
      } else {
        return (
          '<button class="button disabled" type="button">' +
          arrowRight +
          '</button>'
        );
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

  pagination.setTotalItems(data.total_results);

  const markup = movies.renderMovieCard(data.results);
  refs.moviesList.innerHTML = markup;
  refs.searchNotification.textContent = '';

  localStorage.setItem(LOCALSTORAGE_KEY, page);
}
