import React from 'react'
import './Movies.css'
import {Link} from 'react-router-dom'
const Movie = ({Poster : poster, Title : title, HandleFav : handleFav }) => {

  // {Poster : poster, Title : title, Year : year}
  return (
    <div className="movie">
        <img src={poster} alt={title} />
        <div className="movie-info">
            <p>{title}</p>
            <div className="d-flex justify-content-center">

            <Link to="/favourite" className="btn btn-warning mx-4">
                Add to Favourite
              </Link>
           
            </div>
        </div>
    </div>
  )
}

export default Movie