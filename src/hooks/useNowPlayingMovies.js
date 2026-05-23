import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../slices/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS,
    );
    const data = await response.json();

    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
