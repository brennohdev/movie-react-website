import React, {useState} from 'react'
import useFetchMovies from "../../hooks/useFetchMovies.js";
import Loader from "../tool/Loader.js";
import MovieCard from "./MovieCard.jsx";
import TrendingMovieCard from "./TrendingMovieCard.jsx";

const MovieSection = ({ errorMessage, searchTerm }) => {
  const [isLoading] = useState(false);
  const { movies } = useFetchMovies(searchTerm)

  return (
    <div>
      <TrendingMovieCard searchTerm={searchTerm}/>
      <section className="all-movies">
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
    </div>
  )
}
export default MovieSection
