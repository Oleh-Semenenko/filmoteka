import { refs } from './js/refs';
import Movies from './js/Movies';
import renderMarkupStartMoviesList from './js/renderMarkupStartMoviesList';
import renderMarkupByKeywordMoviesList from './js/render-markup-by-keyword';
import genresOfMovies from './data/genresOfMovies.json';
import modal from './js/open-modal';

renderMarkupStartMoviesList(genresOfMovies);
