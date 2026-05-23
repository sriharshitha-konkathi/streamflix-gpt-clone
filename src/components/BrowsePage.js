import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const BrowsePage = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTrendingMovies();
  useUpComingMovies();
  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default BrowsePage;
