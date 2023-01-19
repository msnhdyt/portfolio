import React, { useState } from "react"
import './App.css'
import { getAllMovies, genresCol, addMovie } from "./utils/data"
import Movie from "./Movie"
import Form from "./Form"
import useForm from "./useForm"

function App() {
  const genres = {}
  genresCol.forEach(element => {
    genres[element] = false
  })
  const [movies, setMovies] = useState(getAllMovies())
  const [form, handleInput, resetForm] = useForm({
    title: "",
    year: "",
    synopsis: "",
    poster: "",
    genres: []
  })

  const onFormSubmitHandler = (event) => {
    event.preventDefault()
    addMovie(form)
    setMovies(getAllMovies())
    resetForm()
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
