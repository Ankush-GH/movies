import { useEffect, useState } from "react";

import "./App.css";
import Movie from "./components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7ecd0b11bc4cd387a22b43cb37086584";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=7ecd0b11bc4cd387a22b43cb37086584&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    getMovies(SEARCH_API + search);

    setSearch("");
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <header>
        <h1>Movies App</h1>
        <form onSubmit={submitHandler}>
          <input
            value={search}
            onChange={handleSearchChange}
            className="search"
            type="search"
            placeholder="Search"
          />
        </form>
      </header>
      <div className="App">
        {movies.map((movie) => (
          // ... SPREAD WILL GET ALL THE PROPS OUT FROM THE MOVIE
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

export default App;
