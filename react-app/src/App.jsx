import React, {useEffect, useState} from 'react'
import Search from "./components/layout/Search.jsx";
import Header from "./components/layout/Header.jsx";
import useFetchMovies from "./hooks/useFetchMovies.js";
import MovieSection from "./components/movie/movieSection.jsx";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { errorMessage}  = useFetchMovies(searchTerm);

  useEffect(() => {

  }, []);


  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <Header />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <h1 className="text-white">{searchTerm}</h1>
        <MovieSection errorMessage={errorMessage} searchTerm={searchTerm} />

      </div>

    </main>
  )
}
export default App
