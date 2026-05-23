import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) {
    return (
      <div className="w-36 h-52 flex-shrink-0 px-2">
        <div className="w-full h-full rounded-md bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center p-2 cursor-pointer hover:scale-110 transition-transform duration-200">
          <p className="text-white text-center text-sm font-semibold">
            {title}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-36 flex-shrink-0 px-2">
      <img
        className="rounded-md hover:scale-110 transition-transform duration-200 cursor-pointer"
        src={IMG_CDN_URL + posterPath}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;
