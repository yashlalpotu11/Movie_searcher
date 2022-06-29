import React from 'react'
import Home from './Home'
import { Switch, Route } from "react-router-dom";
import MoviePage from './MoviePage';
import Navbar from './Navbar';
import Favourite from './Favourites';
function Hero({handleLogout}) {
  return (
    <>
       <Navbar handleLogout={handleLogout} />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movie/:id">
          <MoviePage />
        </Route>
        <Route path="/favourite">
          <Favourite />
        </Route>
      </Switch>
      
        
    </>
  )
}

export default Hero