import Storage from '../services/storage';
import configureStoreDev from './configureStore.dev';
import configureStoreProd from './configureStore.prod';

const selectedConfigureStore =
  process.env.NODE_ENV === 'production'
    ? configureStoreProd
    : configureStoreDev;

export const clearState = () => {
  Storage.removeItem('state');
};

export const loadState = () => Storage.getItem('state');

export const saveState = state => {
  Storage.setItem('state', state);
};

export const { configureStore } = selectedConfigureStore;
