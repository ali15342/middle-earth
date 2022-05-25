import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {authenticationApi} from "../../services/api/AuthenticationApi";

function NavLinks() {
    const navigate = useNavigate();
    const logout = async () => {
        await authenticationApi().logout().then((()=>{localStorage.removeItem("jwt"); navigate("/");})).catch((exception=>console.log(exception)));
    };
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
                    logout();
                }}>Logout</Link>
            </li>
            :
            <li>
            <Link className="navbar-brand boldText" to="/login">Login</Link>
            </li>
        }
  </ul>
  );
}

export default NavLinks;