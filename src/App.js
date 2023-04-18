import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function customMovies() {
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
    setMovies(inf);
    setIsLoading(true);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={customMovies}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <p>Loading...</p>}
        {isLoading && <MoviesList movies={movies} />}
      </section>
    </React.Fragment>
  );
}

export default App;
