import axios from 'axios';
import genresOfMovies from '../data/genresOfMovies.json';

class Movies {
  constructor({ url, params: { api_key, page, query } }) {
    this.url = url;
    this.options = {
      params: {
        api_key,
        language: 'en-US',
        page,
        query,
        include_adult: false,
      },
    };

    /* 
        властивісь  "api_key" - передається ЗАВЖДИ, має значення "api_key": API_KEY, де API_KEY - це ваш персональний ключ (тип - string);
        властивість "page" - передається тільки при запиті на отримання популярних фільмів (в тому чслі пагінація).
    
        Приклад:
        
        const trendingMovies = new Movies({
      url: 'https://api.themoviedb.org/3/trending/movie/week',
      params: { api_key: '084c550b6f1767443109bcf4bcaee21b', page: 1 },
    });
        */
  }

  async fetchMovies() {
    const { data } = await axios.get(this.url, this.options);

    return data;
  }

  get query() {
    const { query } = this.options.params;
    return query;
  }

  set query(newQuery) {
    this.options.params.query = newQuery;
  }

  incrementPage() {
    const { page } = this.options.params;
    page += 1;
  }

  decrementPage() {
    const { page } = this.options.params;
    page -= 1;
  }

  getReleaseYear(date) {
    return date.split('-').slice(0, 1).join('');
  }

  getGenres(genre_ids, genresOfMovies) {
    const { genres } = genresOfMovies;

    const namesGenre = genres.reduce((acc, genre) => {
      if (genre_ids.includes(genre.id)) {
        acc.push(genre.name);
      }
      return acc;
    }, []);

    if (namesGenre.length > 3) {
      return [namesGenre[0], namesGenre[1], 'Other'];
    }

    return namesGenre;
  }

  renderMovieCard(movies) {
    return movies
      .map(({ poster_path, original_title, release_date, genre_ids, id }) => {
        const releaseYear = this.getReleaseYear(release_date);
        const genres = this.getGenres(genre_ids, genresOfMovies).join(', ');
        return `
      <li class="movie__item" data-id="${id}">
  <a class="movie__link" data-id="${id}" href="">
  <img src="https://image.tmdb.org/t/p/w342${poster_path}" class="movie__image" data-id="${id}" alt="Poster movie ${original_title}"  width="" height="" />
    <div class="movie__description" data-id="${id}">
      <p class="movie__title" data-id="${id}">${original_title}</p>
      <p class="movie__info" data-id="${id}">${genres}  
      <span class="movie__breacker" data-id="${id}"> | </span>
    <span class="movie__year" data-id="${id}">${releaseYear}</span></p>
    </div>
  </a>
</li>`;
      })
      .join('');
  }
}

export default Movies;
