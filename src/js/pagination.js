import Pagination from 'tui-pagination';
import Movies from './Movies';
import { refs } from './refs';
// import '../css/pagination.scss'

const options = {
  totalItems: 100,
  itemsPerPage: 10,
  visiblePages: 5,
  page: 1,
  centerAlign: false,

  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<button class="button " type="button">{{page}}</button>',
    currentPage:
      '<button class="button" type="button"><strong class="tui-page-btn tui-is-selected">{{page}}</strong></button>',
    moveButton:
      '<button class="button" type="button">' +
      '<span class="tui-ico-{{type}}">{{type}}</span></button>',
    disabledMoveButton:
      '<button class="button" type="button">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</button>',
    moreButton:
      '<button class="button" type="button">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</button>',
  },
};

const pagination = new Pagination('tui-pagination-container', options);
// pagination.getCurrentPage();

//--------------------FETCH--------------------------------------------------
//clicking on pagination
pagination.on('beforeMove', event => {
  fetchData(event.page);
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
  const tuiPag = document.querySelector('.tui-pagination');
  tuiPag.insertAdjacentHTML('afterbegin', markup);
}
