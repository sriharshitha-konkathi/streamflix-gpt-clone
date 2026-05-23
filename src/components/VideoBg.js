import React from "react";
import { useSelector } from "react-redux";
import useBgTrailer from "../hooks/useBgTrailer";

const VideoBg = ({ movieId }) => {
  const movieTrailer = useSelector((state) => state.movies?.trailerVideo);
  useBgTrailer(movieId);
  return (
    <div className="w-screen overflow-hidden">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?autoplay=1&mute=1`}
        title="movie trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBg;
