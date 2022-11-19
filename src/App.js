import React from 'react';
import { useState, useEffect } from 'react';
import MovieCard from "./MovieCard";
import FilterCategory from './FilterCategory';
import './App.css';
import axios from 'axios';

function App() {

  let [movieList, setMovieList] = useState([]);
  let [filtered, setFiltered] = useState([]);
  let [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    getMovies();
  }, []);


  const getMovies = async () => {
    // let data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=22395f1b1ff53bf5063cee7f7ee27d49&language=en-US&page=1');
    // let response = await data.json();
    let response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=22395f1b1ff53bf5063cee7f7ee27d49&language=en-US&page=1");
    console.log(response);
    setMovieList(response.data.results)
    setFiltered(response.data.results)
  }


  return (
    <div className="App">
      <FilterCategory
        movies={movieList}
        filtered={filtered}
        setFiltered={setFiltered}
        setMovieList={setMovieList}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre} />

      <div className='card'>
        {filtered.map((movie) => {
          return <MovieCard key={movie.id} movies={movie} />
        })}</div>

    </div>
  );
}

export default App;
