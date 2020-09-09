class StorageClass {
  constructor() {
    this.store = sessionStorage;
  }

  getItem(key) {
    try {
      const serialized = this.store.getItem(key);
      if (serialized === null) {
        return undefined;
      }
      return JSON.parse(serialized);
    } catch (err) {
      console.warn(err);
      return undefined;
    }
  }

  setItem(key, value) {
    try {
      const serialized = JSON.stringify(value);
      this.store.setItem(key, serialized);
    } catch (err) {
      console.warn(err);
    }
  }

  removeItem(key) {
    this.store.removeItem(key);
  }
}

const Storage = new StorageClass();

export default Storage;
