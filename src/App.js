import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState(null);
  const [check, setCheck] = useState(false);
  function manoj() {
    setCheck(true);
  }
  useEffect(() => {
    customMovies();
  }, []);
  async function customMovies() {
    try {
      setIsLoading(true);
      setError(null);
      while (!check) {
        var res = await fetch("https://reqres.in/api/users?page=2");
        if (!res.ok) {
          throw new Error("something wennt wrong ....Retrying!");
        } else {
          break;
        }
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
          <button onClick={manoj}>Cancel</button>
        </section>
      )}
    </React.Fragment>
  );
}

export default App;
