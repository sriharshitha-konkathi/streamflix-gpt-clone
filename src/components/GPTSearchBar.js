import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddGPTMovies } from "../slices/gptSlice";
import { API_OPTIONS } from "../utils/constants";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieOnTMDB = async (movieName) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}`,
      API_OPTIONS,
    );
    const data = await response.json();
    return data.results;
  };

  const handleSearch = async () => {
    const query = searchText.current.value;

    const prompt = `Act as a movie recommendation expert. Based on this query: "${query}", suggest 5 movie names. Return ONLY the movie names separated by commas. Example: Inception, Interstellar, The Dark Knight, Avatar, Titanic`;

    const url =
      process.env.NODE_ENV === "development"
        ? "/v1/chat/completions"
        : "/api/chat";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_NVIDIA_KEY,
      },
      body: JSON.stringify({
        model: "meta/llama-3.1-8b-instruct",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 100,
      }),
    });

    const data = await response.json();
    const text = data.choices[0].message.content;
    //console.log(text);

    const movieNames = text.split(",").map((name) => name.trim());

    const movieResults = await Promise.all(
      movieNames.map((name) => searchMovieOnTMDB(name)),
    );

    dispatch(AddGPTMovies({ movieNames, movieResults }));
  };

  return (
    <div className=" pt-[10%] flex justify-center">
      <form
        className="flex gap-4 w-1/2"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          ref={searchText}
          placeholder="What would you like to watch today?"
          className="w-full px-4 py-3 bg-white text-black rounded-lg outline-none"
        />
        <button
          type="button"
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
