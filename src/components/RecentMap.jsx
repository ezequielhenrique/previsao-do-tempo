import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

function RecenterMap({ lat, lon }) {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lon]);
  }, [lat, lon, map]);

  return null;
}

export default RecenterMap;
