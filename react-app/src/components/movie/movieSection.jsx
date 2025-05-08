import React, {useState} from 'react'
import useFetchMovies from "../../hooks/useFetchMovies.js";
import Loader from "../tool/Loader.js";
import MovieCard from "./movieCard.jsx";

const MovieSection = ({ errorMessage, searchTerm }) => {
  const [isLoading] = useState(false);
  const { movies } = useFetchMovies(searchTerm)

  return (
    <section className="all-movies">
      <h2 className="mt-[40px]">All Movies</h2>
      {isLoading ? (
        <Loader />
      ): errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </ul>
      )}

    </section>
  )
}
export default MovieSection
