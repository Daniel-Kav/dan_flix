import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';

const API_URL = " http://www.omdbapi.com/?i=tt3896198&apikey=5b14d31c"

const App = () => {


  const SearchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  }
  useEffect(() => {
    SearchMovies('Avengers');
  }, [])
  return (
    <h1>App</h1>
  );
}

export default App;