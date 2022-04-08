import Navbar from "../Navbar/Navbar"
import { Link, useNavigate } from "react-router-dom";
function Home() {
  return (
    <div>
      <Navbar/>
      <div className="text-center">
        <h1>Welcome to Middle Earth Maps!</h1>
        <p>Explore the world of middle earth with our map.</p>
        <Link to="../register" className="btn btn-primary App">Register</Link>
      </div>
    </div>
  )
}

export default Home