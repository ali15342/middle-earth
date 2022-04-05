import mapImage from '../img/mapv0.5.jpg'
import { MapContainer, TileLayer, Marker, Popup, ImageOverlay } from 'react-leaflet'

function Map() {
  


  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13}>
    <TileLayer
      url="../img/tiles/4/3/9.jpg"
    />
    
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
  )
}

export default Map