import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../slices/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const fetchTrendingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day",
      API_OPTIONS,
    );
    const data = await response.json();

    dispatch(addTrendingMovies(data.results));
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);
};

export default useTrendingMovies;
