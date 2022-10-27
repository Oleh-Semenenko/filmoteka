import axios from 'axios';
import genresOfMovies from '../data/genresOfMovies.json';

class Movies {
  constructor({ url, params: { api_key, page } }) {
    this.url = url;
    this.options = {
      params: {
        api_key,
        language: 'en-US',
        page,
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
    const response = await axios.get(this.url, this.options);

    return response.data;
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
      .map(({ poster_path, original_title, release_date, genre_ids }) => {
        const releaseYear = this.getReleaseYear(release_date);
        const genres = this.getGenres(genre_ids, genresOfMovies).join(', ');
        return `
      <div>
  <a href="">
  <img src="https://image.tmdb.org/t/p/w342${poster_path}" alt="Poster movie "${original_title}"  />
    <div>
      <h2>${original_title}</h2>
      <p>${genres}</p>
      <p>${releaseYear}</p>
    </div>
  </a>
</div>`;
      })
      .join('');
  }
}

export default Movies;
