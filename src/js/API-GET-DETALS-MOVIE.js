import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';

axios.defaults.baseURL = BASE_URL;

export default class GetPrimoryInfoMovie {
  #api = 'bc9d08ee6fd18cf8f4f4696f2ff2acd2';

  async fetchMovie(id) {
    const urlAxios = `${id}?api_key=${this.#api}`;
    const { data } = await axios.get(urlAxios);
    return data;
    //     const {id,
    //       original_title,
    //       vote_average,
    //       vote_count,
    //       popularity,
    //       genres,
    //       poster_path,
    //       tagline,
    //       title,
    //     } = await data;
  }
}
