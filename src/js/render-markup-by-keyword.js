import Movies from './Movies';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';
import { spinerPlay, spinerStop } from './spinner';

const moviesByKeyword = new Movies({
  url: 'https://api.themoviedb.org/3/search/movie',
  params: {
    api_key: '084c550b6f1767443109bcf4bcaee21b',
    page: 1,
  },
});

refs.searchFormEl.addEventListener('submit', handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();

  const {
    elements: { query },
  } = e.currentTarget;
  const searchQuery = query.value.trim().toLowerCase();

  if (!searchQuery) {
    return Notify.info('Enter something in the form!');
  }

  moviesByKeyword.query = searchQuery;
  spinerPlay();
  try {
    const { results, total_results } = await moviesByKeyword.fetchMovies();

    if (total_results === 0) {
      return Notify.failure(
        `Sorry, there are no images matching your search query "${searchQuery}". Please try again.`
      );
    }

    const markup = moviesByKeyword.renderMovieCard(results);
    refs.moviesList.innerHTML = markup;
  } catch (error) {
    console.log(error);
  } finally {
    spinerStop();
  }
}
