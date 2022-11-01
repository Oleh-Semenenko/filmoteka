import { refs } from './refs';
import genresOfMovies from '../data/genresOfMovies.json';
import { spinerPlay, spinerStop } from './spinner';
import { movies } from './Movies';

async function renderMarkupStartMoviesList(genresOfMovies) {
  spinerPlay();
  try {
    movies.url = 'https://api.themoviedb.org/3/trending/movie/week';
    movies.updatePageNumber(1);
    const dataMovies = await movies.fetchMovies();
    const results = dataMovies.results;

    refs.moviesList.innerHTML = movies.renderMovieCard(results);
  } catch (error) {
    console.log(error.message);
  } finally {
    spinerStop();
  }
}

export default renderMarkupStartMoviesList;
