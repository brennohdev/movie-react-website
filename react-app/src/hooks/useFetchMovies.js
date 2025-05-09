import {useEffect, useState} from "react";
import {useDebounce} from "react-use";
import {updateSearchCount} from "../appwrite.js";

const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

const useFetchMovies = (searchTerm) => {
  const [movies, setMovies] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  //Debounce the search term to prevent making too many API requests
  // by waiting for the user to stop typing for 500ms

  useDebounce(()=> setDebouncedSearchTerm(searchTerm), 750, [searchTerm])

  useEffect(() => {

    const fetchMovies = async () => {
      setIsLoading(true);
      setErrorMessage('');

      try {
        const endpoint = debouncedSearchTerm
          ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(debouncedSearchTerm)}`
          : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

        const response = await fetch(endpoint, API_OPTIONS);
        const data = await response.json();

        if (response.ok) {
          setMovies(data.results);
        } else {
          setErrorMessage(data.status_message);
        }

        if(debouncedSearchTerm && data.results.length > 0) {
          await updateSearchCount(debouncedSearchTerm, data.results[0]);
        }

      } catch (error) {
        console.error("Error fetching movies.", error);
        setErrorMessage("An error occurred while fetching movies.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [debouncedSearchTerm]);

  return { movies, errorMessage, isLoading };
};

export default useFetchMovies;