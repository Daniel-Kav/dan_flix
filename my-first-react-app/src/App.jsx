import React, { useEffect, useState } from 'react';
import './App.css';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=5b14d31c';

function App() {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the async function
    fetchData();
  }, []); // The empty dependency array ensures that the effect runs once after the initial render

  return (
    <div>
      <h1>Hello World!!!</h1>
      {movieData && (
        <div>
          <h2>Movie Details:</h2>
          <p>Title: {movieData.Title}</p>
          <p>Year: {movieData.Year}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
}

export default App;
