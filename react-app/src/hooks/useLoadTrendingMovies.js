import {useEffect, useState} from "react";
import {getTrandingMovies} from "../appwrite.js";

const useLoadTrendingMovies =  () => {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {

    const loadTrendingMovies = async () => {
      try {
        const movies = await getTrandingMovies();

        setTrendingMovies(movies);

      } catch (error) {
        console.error(`Error fetching trending movies: ${error}`);
      }
    };

    loadTrendingMovies();

  }, []);

  return trendingMovies;
};

export default useLoadTrendingMovies;