import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchResults from "./GPTSearchResults";

const GPTSearchPage = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg')",
      }}
      className="min-h-screen bg-cover bg-center"
    >
      <div className="min-h-screen bg-black bg-opacity-60 pt-24">
        <GPTSearchBar />
        <GPTSearchResults />
      </div>
    </div>
  );
};

export default GPTSearchPage;
