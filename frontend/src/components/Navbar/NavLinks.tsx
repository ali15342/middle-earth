import React from 'react'
import { Link } from "react-router-dom";
import {authenticationApi} from "../../services/api/authenticationApi";

function NavLinks() {
  return (
    <ul className="center">
        <li>
            <Link className="navbar-brand boldText" to="/">Home</Link>
        </li>
        <li>
            <Link className="navbar-brand boldText" to="/map">Map</Link>
        </li>
        <li>
            <Link className="navbar-brand boldText" to="/about">About</Link>
        </li>
        {
            localStorage.getItem("jwt") != null ?
                <li>
                    <Link className="navbar-brand boldText" to="/characters">Characters</Link>
                </li>
                :
                null
        }
        {
            localStorage.getItem("jwt") != null ?
                <li>
                    <Link className="navbar-brand boldText" to="/profile">Profile</Link>
                </li>
                :
                null
        }
        {
            localStorage.getItem("jwt") != null ?
            <li>
                <Link className="navbar-brand boldText" to="/" onClick={()=> {
                    localStorage.removeItem("jwt");
                    authenticationApi().logout();
                }}>Logout</Link>
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