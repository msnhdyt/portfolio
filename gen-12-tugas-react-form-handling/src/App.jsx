import React, { useEffect, useState } from "react"
// import reactLogo from './assets/react.svg'
import './App.css'
import { getAllMovies, genresCol, addMovie } from "./utils/data"
import Movie from "./Movie"
import Form from "./Form"

function App() {

  const [movies, setMovies] = useState(getAllMovies())
  const [form, setForm] = useState({
    title: "",
    year: "",
    synopsis: "",
    poster: "",
    genres: new Array(genresCol.length).fill(false)
  })
  const handleInput = (key, value, position) => {
    if(key !== "genres"){
      setForm({...form, [key]:value})
    }else {
      const updateGenres = form.genres.map((genre, index) => {
        return index === position ? !genre : genre
      })
      setForm({...form, [key]:updateGenres})
    }
  }

  const onFormSubmitHandler = (event) => {
    event.preventDefault()
    addMovie(form)
    setMovies(getAllMovies())
    setForm({
      title: "",
      year: "",
      synopsis: "",
      poster: "",
      genres: new Array(genresCol.length).fill(false)
    })
  }

  return <>
    <h1>My Favorite Movies/Series</h1>
    <Form newMovie={form} handleInput={handleInput} onFormSubmitHandler={onFormSubmitHandler} />
    {
      movies.map((movie) => {
        return <Movie {...movie} key={movie.id} />
      })
    }
  </>
}

export default App
