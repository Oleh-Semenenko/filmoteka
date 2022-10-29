import { refs } from './js/refs';
import './js/layout/header';
import Movies from './js/Movies';
import renderMarkupStartMoviesList from './js/renderMarkupStartMoviesList';
import renderMarkupByKeywordMoviesList from './js/render-markup-by-keyword';
import genresOfMovies from './data/genresOfMovies.json';
import './js/pagination';

renderMarkupStartMoviesList(genresOfMovies);

