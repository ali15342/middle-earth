import mapImage from '../img/mapv0.5.jpg'

function Map() {
  return (
    <div>
         <img alt="This is the map of middle earth." src={mapImage} style={{"maxWidth":"100%", "maxHeight":"10%"}}/>
    </div>
  )
}

export default Map