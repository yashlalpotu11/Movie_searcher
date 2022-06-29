import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
export default function Navbar({handleLogout}) {
  return (
    <>
        <header className='navbar'>
            <div >
                <Link to="/" className='navbar__title navbar__item'>
                     MOVIE SEARCHER
                </Link>

               
            </div>
            <div className="d-flex">
              <Link to="/favourite" className='navbar__title navbar__item'>
                Favourites
              </Link>
              <button onClick={handleLogout} className='btn mx-5 bg-primary'>Logout</button>
            </div>       
        </header>
    </>
  );
}
