import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../slices/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useBgTrailer = (movieId) => {
  const dispatch = useDispatch();

  const fetchTrailer = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS,
    );
    const data = await response.json();

    const trailer = data.results.filter((video) => video.type === "Trailer");

    const mainTrailer = trailer.length ? trailer[0] : data.results[0];

    dispatch(addTrailerVideo(mainTrailer));
  };

  useEffect(() => {
    fetchTrailer();
  }, []);
};

export default useBgTrailer;
