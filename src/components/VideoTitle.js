import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute bg-gradient-to-r from-black pt-36 px-12 text-white">
      <h1 className="text-5xl font-bold mb-5">{title}</h1>
      <p className="text-lg w-1/3 mb-7">{overview}</p>
      <div className="flex gap-4">
        <button className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="px-6 py-2 bg-gray-700 text-white font-bold rounded-lg">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
