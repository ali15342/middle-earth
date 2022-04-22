import Navbar from "../Navbar/Navbar"
import mapImage from '../../img/mapv0.5.jpg'
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Navbar/>
      <div className="text-center bg-image">
          <h1>Welcome to Middle Earth Maps</h1>
                <p>Explore the world of middle earth with our map.</p>
                <Link to="../register" className="btn btn-primary App">Register</Link>
          </div>
    </div>
  )
}

export default Home