import React from 'react'
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <ul className="center">
        <li>
         <Link className="navbar-brand boldText" to="/">Home</Link>
        </li>
        <li>
         <Link className="navbar-brand boldText" to="/about">About</Link>
        </li>
        <li>
         <Link className="navbar-brand boldText" to="/map">Map</Link>
        </li>
        <li>
         <Link className="navbar-brand boldText" to="/characters">Characters</Link>
        </li>
        <li>
          <Link className="navbar-brand boldText" to="/profile">Profile</Link>
        </li>
        {
            localStorage.getItem("jwt") != null ?
            <li>
                <Link className="navbar-brand boldText" to="/" onClick={e=>localStorage.removeItem("jwt")}>Logout</Link>
            </li>
            :
            <li>
            <Link className="navbar-brand boldText" to="/login">Login</Link>
            </li>
        }
  </ul>
  )
}

export default NavLinks