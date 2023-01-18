import React from "react"

function Movie({id, title, year, synopsis, poster, genres}){
  return <>
    <div className="movie">
      <img width="250px" src={poster!="" ? poster : "https://thumbs.dreamstime.com/b/transparent-designer-must-have-fake-background-39672616.jpg"} alt="" />
      <div className="movie__content">
        <h3 className="movie__title">{title}</h3>
        <p className="movie__year">{year}</p>
        <p>{genres.toString()}</p>
        <p className="movie__synopsis">{synopsis}</p>
      </div>
    </div>
  </>
}

export default Movie