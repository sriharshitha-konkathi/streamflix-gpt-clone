import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../slices/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const fetchUpComingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS,
    );
    const data = await response.json();

    dispatch(addUpComingMovies(data.results));
  };

  useEffect(() => {
    fetchUpComingMovies();
  }, []);
};

export default useUpComingMovies;
