import React, { useState } from "react";

import MoviesList from "./components/MovieList/MoviesList";
import "./App.css";

function App() {
  const [dummyMovies, setDummyMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = () => {
    setIsLoading(true);
    fetch("https://swapi.dev/api/films/")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const transformedData = res.results.map((item) => {
          return {
            id: item.episode_id,
            title: item.title,
            releaseDate: item.release_date,
            openingText: item.opening_crawl
          };
        });
        setDummyMovies(transformedData);
        setIsLoading(false);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <h4>Loading...</h4>}
        {!isLoading && dummyMovies.length > 0 && (
          <MoviesList movies={dummyMovies} />
        )}
        {!isLoading && dummyMovies.length === 0 && <h4>No data found...</h4>}
      </section>
    </React.Fragment>
  );
}

export default App;
