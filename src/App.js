import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import TicTacToe from './containers/TicTacToe';

function App({ store }) {
  return (
    <div className="App">
      <Provider store={store}>
        <TicTacToe />
      </Provider>
    </div>
  );
}

export default App;
