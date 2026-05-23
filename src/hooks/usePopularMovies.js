import { useDispatch } from "react-redux";
import { addPopularMovies } from "../slices/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS,
    );
    const data = await response.json();

    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);
};

export default usePopularMovies;
