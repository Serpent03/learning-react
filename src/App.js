import './App.css';
import CountSection from './components/CountSection/countsection';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { React, useRef } from 'react';

function App() {
  return (
    <div>
      <MapContainer center={[30.78, 76.88]} zoom={12} maxZoom={12}>
        <TileLayer
          url='https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default App;
