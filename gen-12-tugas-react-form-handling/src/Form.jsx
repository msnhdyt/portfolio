import React, {useState} from "react"
import { genresCol } from "./utils/data"

function Form({newMovie, handleInput, onFormSubmitHandler}){
  
  return <>
    <form onSubmit={onFormSubmitHandler}>
      <label>
        Title
        <input required type="text" value={newMovie.title} onChange={(event) => handleInput("title", event.target.value)}/>
      </label>
      <label>
        Year
        <input required type="text" value={newMovie.year} onChange={(event) => handleInput("year", event.target.value)}/>
      </label>
      <label>
        Synopsis
        <textarea required cols="30" rows="10" value={newMovie.synopsis} onChange={(event) => handleInput("synopsis", event.target.value)}></textarea>
      </label>
      <label>
        Link Poster (optional)
        <input type="text" value={newMovie.poster} onChange={(event) => handleInput("poster", event.target.value)}/>
      </label>
      <div>
        {
          genresCol.map((genre, index) => {
            return <label key={index}>
              <input type="checkbox" 
              value={genre} 
              checked={newMovie.genres[index]} 
              onChange={(event) => handleInput("genres", "", index)}/>
              {genre}
            </label>
          })
        }
      </div>
      <button>Add</button>
    </form>
  </>
}

export default Form