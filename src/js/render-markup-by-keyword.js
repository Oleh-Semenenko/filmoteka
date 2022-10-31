import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';
import { spinerPlay, spinerStop } from './spinner';
import { pagination } from './pagination';
import { movies } from './Movies';

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

  movies.url = 'https://api.themoviedb.org/3/search/movie';
  movies.query = searchQuery;
  movies.updatePageNumber(1);

  spinerPlay();
  try {
    const { results, total_results } = await movies.fetchMovies();

    if (total_results === 0) {
      return Notify.failure(
        `Sorry, there are no images matching your search query "${searchQuery}". Please try again.`
      );
    }

    pagination.reset(total_results);

    const markup = movies.renderMovieCard(results);
    refs.moviesList.innerHTML = markup;
  } catch (error) {
    console.log(error);
  } finally {
    spinerStop();
  }
}
