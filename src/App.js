import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function customMovies() {
    setIsLoading(true);
    const res = await fetch("https://reqres.in/api/users?page=2");
    const dat = await res.json();
    let inf = dat.data.map((e) => {
      return {
        id: e.id,
        title: e.email,

        releaseDate: e.first_name,

        openingText: e.last_name,
      };
    });

    setIsLoading(false);
    setMovies(inf);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={customMovies}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <p>Loading...</p>}
        {movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>There is no data</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
