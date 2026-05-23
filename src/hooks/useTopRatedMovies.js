import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../slices/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const fetchTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS,
    );
    const data = await response.json();

    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
