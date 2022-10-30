import Movies from './Movies';
import { refs } from './refs';
import genresOfMovies from '../data/genresOfMovies.json';

const trendingMovies = new Movies({
  url: 'https://api.themoviedb.org/3/trending/movie/week',
  params: { api_key: '084c550b6f1767443109bcf4bcaee21b', page: 1 },
});

async function renderMarkupStartMoviesList(genresOfMovies) {
  try {
    const dataMovies = await trendingMovies.fetchMovies();
    const movies = dataMovies.results;

    refs.moviesList.innerHTML = trendingMovies.renderMovieCard(movies);
  } catch (error) {
    console.log(error.message);
  }
}

renderMarkupStartMoviesList(genresOfMovies);

export default renderMarkupStartMoviesList;
