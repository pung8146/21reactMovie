import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Counter from './Counter';
import Showing from './Showing';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <hr />
    <Counter />
    <hr />
    <Showing />
    <hr />
  </React.StrictMode>,
  document.getElementById('root')
);
