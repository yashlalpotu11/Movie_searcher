import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useGlobalContext} from './context'
import Movie from './Movie'
import './Movies.css'
function Movies() {
    const {movies} = useGlobalContext()

    const[favourites, setFavourites] = useState([]);

    const addFavourite = (movie) => {
        setFavourites([...favourites, movie])   
    }

    return (
        <section className='movie-container'>
            {movies.map((movie)=>{
                return(
                    <Link to={`/movie/${movie.imdbID}`}>
                        <Movie key={movie.id} handleFav={addFavourite} {...movie} />
                    </Link>
                )
            })}
        </section>
    )
}

export default Movies