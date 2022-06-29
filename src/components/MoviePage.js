import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";
import "./MoviePage.css";
import Loader from './Loader'
import Favourite from './Favourites'

const MoviePage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    setLoading(true);
    const response = await fetch(`${API_ENDPOINT}&i=${id}`);
    const data = await response.json();

    console.log(data);
    if (data.Response === "True") {
      setMovie(data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loader/>
  }

  return (
    <>
    <section className="back" style={{backgroundSize : 'cover', backgroundImage: `linear-gradient( rgb(15, 23, 42,1),rgba(15, 24, 42, 0.7) ,rgba(15, 24, 42,1)), url(${movie.Poster})`}}>
      <div className="movie-page">
        <div className="poster">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="single-movie-info">
          <h2>{movie.Title}</h2>
          <p>{movie.Plot}</p>
          <div className="d-flex">
              <p className="py-1" >Time : {movie.Runtime}</p>
              <p className="bg-white text-black mx-2 p-1 rounded" >Rated : {movie.Rated}</p>
          </div>
          <h5>Actors : {movie.Actors}</h5>
          <div className="d-flex">
            <p className="py-1">
              Year: <strong>{movie.Year}</strong>
            </p>
              <p className="bg-success text-white mx-4 p-1 rounded" >IMDB : {movie.imdbRating}</p>
          </div>
         
          <div className="d-flex">
              <Link to="/" className="btn btn-primary">
                Back to home
              </Link>

              <Link to="/favourite" className="btn btn-warning mx-4">
                Add to Favourite
              </Link>
          </div>
          
        </div>
      </div>
    </section>
    
    </>
  );
};

export default MoviePage;