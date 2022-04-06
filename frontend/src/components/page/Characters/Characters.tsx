import Navbar from '../../Navbar/Navbar'
import Character from './Character'
import './characters.css'
function Characters() {
  return (
    <div>
        <Navbar/>
        <div className="characterContent">
          <h1>The world of middle earth!</h1>
          <p>Here's some cool characters</p>
          Info About Characters, using The One API
         
          <Character/>
          <Character/>
          <Character/>
        
        </div>
        </div>
  )
}

export default Characters