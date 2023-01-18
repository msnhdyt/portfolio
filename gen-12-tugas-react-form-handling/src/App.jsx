import React, { useState } from "react"
import './App.css'
import { getAllMovies, genresCol, addMovie } from "./utils/data"
import Movie from "./Movie"
import Form from "./Form"

function App() {
  const genres = {}
  genresCol.forEach(element => {
    genres[element] = false
  })
  const [movies, setMovies] = useState(getAllMovies())
  const [form, setForm] = useState({
    title: "",
    year: "",
    synopsis: "",
    poster: "",
    genres: genres
  })
  const handleInput = (key, value) => {
    if(key !== "genres"){
      setForm({...form, [key]:value})
    }else {
      const updateGenres = {...form.genres, [value]:!form.genres[value]}
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
      genres: genres
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
