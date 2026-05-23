import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="">
      <h2 className="text-3xl text-white font-bold px-2 py-4">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
