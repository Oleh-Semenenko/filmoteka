import Movies from './Movies';

async function getDataTrailerMovie(idMovie) {
  const trailerMovie = new Movies({
    url: `https://api.themoviedb.org/3/movie/${idMovie}/videos`,
    params: { api_key: '084c550b6f1767443109bcf4bcaee21b' },
  });
  try {
    const { results } = await trailerMovie.fetchMovies();
    return results;
  } catch (error) {
    console.log(error.message);
  }
}

export default getDataTrailerMovie;
