import Pagination from 'tui-pagination';
import Movies from './Movies';
import { refs } from './refs';

const options = {
  totalItems: 100,
  itemsPerPage: 10,
  visiblePages: 4,
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
      '<span class="tui-ico-{{type}}">{{type}}</span></button>',
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

async function fetchData(page) {
  const params = new URLSearchParams({
    api_key: 'f23afa13cf10e0a13fa8c4a5195ece8b',
    media_type: 'movie',
    page: page,
  });

  const trendingMovies = new Movies({
    url: `${BASE_URL}/3/trending/movie/day?${params}`,
    params: params,
  });

  const data = await trendingMovies.fetchMovies();

  const markup = trendingMovies.renderMovieCard(data.results);
  refs.moviesList.innerHTML = markup;
}
