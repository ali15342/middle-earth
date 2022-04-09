import './navbar.css'
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  return (
      <div className='content'>
        <Link className="navbar-brand boldText" to="/map">Map</Link>
        <Link className="navbar-brand boldText" to="/characters">Characters</Link>
        <Link className="navbar-brand boldText" to="/">Home</Link>
        <Link className="navbar-brand boldText" to="/about">About</Link>
        <Link className="navbar-brand boldText" to="/login">Login</Link>
        <Link className="navbar-brand boldText" to="/profile">Profile</Link>
      </div>
  )
}

export default Navbar