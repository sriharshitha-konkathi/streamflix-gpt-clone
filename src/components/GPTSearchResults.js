import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSearchResults = () => {
  const { movieNames, movieResults } = useSelector((state) => state.gpt);

  if (!movieNames) return null;

  return (
    <div className="bg-black bg-opacity-80 p-4">
      {movieNames.map((name, index) => (
        <MovieList key={name} title={name} movies={movieResults[index]} />
      ))}
    </div>
  );
};

export default GPTSearchResults;
