import Pagination from 'tui-pagination';
import Movies from './Movies';
import renderMarkupStartMoviesList from './renderMarkupStartMoviesList';
import { refs } from './refs';

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
    moveButton:
      '<button class="button pagination-{{type}}" type="button">' +
      '<svg width="16" height="16"><use href="./images/symbol-defs.svg#icon-arrow-left"></use></svg>',
    disabledMoveButton:
      '<button class="button pagination-{{type}}" type="button">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</button>',
    moreButton:
      '<button class="button" type="button">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</button>',
  },
};

const pagination = new Pagination('tui-pagination-container', options);

// click on pagination
pagination.on('beforeMove', event => {
  const currentPage = event.page;
  fetchData(currentPage);
});

const BASE_URL = 'https://api.themoviedb.org';
const LOCALSTORAGE_KEY = 'current-page';

const localStorageCurrentPage = localStorage.getItem(LOCALSTORAGE_KEY);

if (localStorageCurrentPage) {
  pagination.movePageTo(localStorageCurrentPage);
} else {
  renderMarkupStartMoviesList();
}

async function fetchData(page) {
  const params = new URLSearchParams({
    api_key: 'f23afa13cf10e0a13fa8c4a5195ece8b',
    media_type: 'movie',
    page: page,
  });

  const trendingMovies = new Movies({
    url: `${BASE_URL}/3/trending/movie/week?${params}`,
    params: params,
  });

  const data = await trendingMovies.fetchMovies();

  const markup = trendingMovies.renderMovieCard(data.results);
  refs.moviesList.innerHTML = markup;

  localStorage.setItem(LOCALSTORAGE_KEY, page);
}
