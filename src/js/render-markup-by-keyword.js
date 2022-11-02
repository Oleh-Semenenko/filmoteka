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
    return onSearchResultNotification('Enter something in the form!');
  }

  movies.url = 'https://api.themoviedb.org/3/search/movie';
  movies.query = searchQuery;
  movies.updatePageNumber(1);

  spinerPlay();
  try {
    const { results, total_results } = await movies.fetchMovies();
    console.log(results);

    if (total_results === 0) {
      return onSearchResultNotification(
        `Sorry, there are no movies matching your search query ${searchQuery}. Please write an existing movie.`
      );
    }

    onSearchResultNotification(
      `${total_results} movies were found matching your request.`
    );
    pagination.reset(total_results);

    const markup = movies.renderMovieCard(results);
    refs.moviesList.innerHTML = markup;
  } catch (error) {
    console.log(error);
  } finally {
    spinerStop();
  }

  function onSearchResultNotification(search) {
    refs.searchNotification.textContent = search;
  }
}
