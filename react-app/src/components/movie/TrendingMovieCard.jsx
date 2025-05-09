import React from 'react'
import useLoadTrendingMovies from "../../hooks/useLoadTrendingMovies.js";

const TrendingMovieCard = ({ searchTerm }) => {
  const  trendingMovies  = useLoadTrendingMovies(searchTerm);

  if (!trendingMovies || trendingMovies === 0) {
    return <p className="text-white">Not found movies.</p>;
  }

  return (
    <section className="trending">
      <h2>Trending Movies</h2>

      <ul>
        {trendingMovies.map((movie, index) => (
            <li key={movie.$id}>
              <p>{index + 1}</p>
              <img src={movie.poster_url} alt={movie.title}/>
            </li>
        ))}
      </ul>
    </section>
  )
}
export default TrendingMovieCard
