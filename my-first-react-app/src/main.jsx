import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import MovieCard from './MovieCard.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MovieCard />
  </React.StrictMode>,
  document.getElementById('root')
);
