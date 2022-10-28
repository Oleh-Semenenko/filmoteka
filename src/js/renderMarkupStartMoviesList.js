import Movies from './Movies';

// const moviesListEl = document.querySelector('main');
//потрібно перенести у refs

const trendingMovies = new Movies({
  url: 'https:api.themoviedb.org/3/trending/movie/week',
  params: { api_key: '084c550b6f1767443109bcf4bcaee21b', page: 1 },
});

async function renderMarkupStartMoviesList(genresOfMovies) {
  try {
    const dataMovies = await trendingMovies.fetchMovies();
    const movies = dataMovies.results;

    moviesListEl.innerHTML = trendingMovies.renderMovieCard(movies);
  } catch (error) {
    console.log(error.message);
  }
}

// export default renderMarkupStartMoviesList;
