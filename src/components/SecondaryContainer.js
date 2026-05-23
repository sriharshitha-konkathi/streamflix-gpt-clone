import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div className=" -mt-60 relative z-20 space-y-10 px-6 pb-20">
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies || []} />
      <MovieList title="Popular" movies={movies?.popularMovies || []} />
      <MovieList title="Top Rated" movies={movies?.topRatedMovies || []} />
      <MovieList title="Trending" movies={movies?.trendingMovies || []} />
      <MovieList title="Up Coming" movies={movies?.upComingMovies || []} />
    </div>
  );
};

export default SecondaryContainer;
