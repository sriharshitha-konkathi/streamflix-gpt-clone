import React from "react";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];

  const { id, original_title, overview } = mainMovie;

  return (
    <div className="relative overflow-x-scroll ">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBg movieId={id} />
    </div>
  );
};

export default MainContainer;
