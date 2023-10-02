import './App.css';
import CountSection from './components/CountSection/countsection';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { React, useRef } from 'react';
import { counters } from './components/counters';

function App() {
  // check land cover and overpass API
  // https://wiki.openstreetmap.org/wiki/Overpass_API
  // https://wiki.openstreetmap.org/wiki/Landcover

  return (
    <div class='App'>
      <MapContainer center={[30.78, 76.88]} zoom={12} maxZoom={12}>
        <TileLayer
          url='https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker 
          position={[30.78, 76.88]}
          icon={counters.blufor_inf_bat}
        ></Marker>
        <Marker 
          position={[30.79, 76.87]}
          icon={counters.blufor_inf_bat}
        ></Marker>
        <Marker 
          position={[30.80, 76.89]}
          icon={counters.blufor_inf_bat}
        ></Marker>

      </MapContainer>
    </div>
  );
}

export default App;
