import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = " http://www.omdbapi.com/?i=tt3896198&apikey=5b14d31c";

const movie1 = {
    "Title": "Avengers: Endgame",
    "Year": "2019",
    "imdbID": "tt4154796",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
};

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const SearchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    SearchMovies('Avengers');
  }, [])
  return (
    <div className="app">
      <h1>DanFlix</h1>

      <div className="search">
        <input 
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
        <img src={SearchIcon}
          alt="Search"
          onClick={()=>SearchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0 ?(
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))
            }
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }

      
    </div>
  );
}

export default App;