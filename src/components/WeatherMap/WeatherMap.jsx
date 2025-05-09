import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import RecenterMap from '../RecentMap';
import './WeatherMap.css';

function WeatherMap({ lat, lon, city }) {
  return (
    <MapContainer center={[lat, lon]} zoom={12} className='map-container'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={[lat, lon]}>
        <Popup>
          {city}
        </Popup>
      </Marker>
      <RecenterMap lat={lat} lon={lon}/>
    </MapContainer>
  )
}

export default WeatherMap;
