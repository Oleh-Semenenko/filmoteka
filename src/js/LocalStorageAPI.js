export default class LocalStorageAPI {
  getMovies(key) {
    const keyStorage = this.load(key);

    if (Array.isArray(keyStorage)) return keyStorage;

    this.save(key, []);
    return [];
  }

  addMovie(key, value) {
    const dataFromLocalStorage = this.load(key);
    this.save(key, [value, ...dataFromLocalStorage]);
  }

  removeMovie(key, value) {
    const dataFromLocalStorage = this.load(key);

    const valueIndex = dataFromLocalStorage.indexOf(value);

    if (0 <= valueIndex) {
      dataFromLocalStorage.splice(valueIndex, 1);

      this.save(key, dataFromLocalStorage);
    }
  }

  load(key) {
    try {
      const serializedState = localStorage.getItem(key);

      return serializedState === null ? [] : JSON.parse(serializedState);
    } catch (error) {
      console.error(error.message);
    }
  }

  save(key, value) {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error(error.message);
    }
  }
}
