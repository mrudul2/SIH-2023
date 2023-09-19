import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import "../App.css";
import LeafletGeocoder from "./LeafletGeocoder.js";
import LeafletRoutingMachine from "./LeafletRoutingMachine";


function MainMap() {
  const position = [20.5, 78.9];
  return (
    <div className="App">

      <MapContainer center={position} zoom={12} scrollWheelZoom={true} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}@2x.jpg?key=OnXJPBh7IkMHefqgKgQS"
        />
        <LeafletGeocoder />
      </MapContainer>

    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: "./blueicon.png",
  iconSize: [50, 50],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;
export default MainMap;
