import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState(null);
  async function customMovies() {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch("https://reqres.in/api/");
      if (!res.ok) {
        throw new Error("something wennt wrong ....Retrying!");
      }
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
    } catch (error) {
      setError(error.message);
    }
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
        {err && <p>{err}</p>}
      </section>

      {isLoading && (
        <section>
          <button onClick={customMovies}>Cancel</button>
        </section>
      )}
    </React.Fragment>
  );
}

export default App;
