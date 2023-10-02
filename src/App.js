import './App.css';
import CountSection from './components/CountSection/countsection';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { counters } from './components/counters';
import MarkerClusterGroup from 'react-leaflet-cluster';


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

        <MarkerClusterGroup
          disableClusteringAtZoom={10}
          chunkedLoading
        >
          <Marker position={[30.78, 76.88]} icon={counters.blufor_inf_bat.icon}>
            <Popup>
              {counters.blufor_inf_bat.desc}
            </Popup>
          </Marker>

          <Marker position={[30.80, 76.89]} icon={counters.blufor_mech_bat.icon}>
            <Popup>
              {counters.blufor_mech_bat.desc}
            </Popup>
          </Marker>
        </MarkerClusterGroup>

      </MapContainer>
    </div>
  );
}

export default App;
