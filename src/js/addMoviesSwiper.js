import Swiper from '../../node_modules/swiper/swiper-bundle';
import '../../node_modules/swiper/swiper-bundle.css';

import { refs } from './refs';

import { spinerPlay, spinerStop } from './spinner';
import Movies from './Movies';

const moviesSwiper = new Movies({
  url: 'https://api.themoviedb.org/3/trending/movie/day',
  params: { api_key: '084c550b6f1767443109bcf4bcaee21b' },
});

async function addMoviesSwiper(genresOfMovies) {
  spinerPlay();
  try {
    const { results } = await moviesSwiper.fetchMovies();

    refs.swiper.innerHTML = moviesSwiper.renderMovieCardSwiper(results);

    const swiper = new Swiper('.swiper', {
      loop: true,
      speed: 1000,

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      slidesPerView: 1,
      spaceBetween: 10,

      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 7,
          spaceBetween: 10,
        },
      },

      navigation: {
        nextEl: '.slider__button--next',
        prevEl: '.slider__button--prev',
      },
    });
  } catch (error) {
    console.log(error.message);
  } finally {
    spinerStop();
  }
}
addMoviesSwiper();

export default addMoviesSwiper;
