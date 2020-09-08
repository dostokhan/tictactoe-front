import { combineReducers } from 'redux';
import app from './app';

export default function createRootReducer() {
  return combineReducers({
    app
  });
}
