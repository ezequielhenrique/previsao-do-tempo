import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import RecenterMap from '../RecentMap';
import './WeatherMap.css';

// Código para correção de bug do ícone
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

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
