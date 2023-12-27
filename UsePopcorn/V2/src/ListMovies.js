import { useState } from "react";

export function ListMovies({ movies }) {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <Movies movies={movies} />}
    </div>
  );
}

function Movies({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <ListingMovies movie={movie} />
      ))}
    </ul>
  );
}

function ListingMovies({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
