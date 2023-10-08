import 'leaflet/dist/leaflet.css';
import './MapPage.css'
import Navbar from "../navbar.js";
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function MapPage() {
    return (
        <div class='wrapper'>
            <Navbar />
            <h1> Map </h1>
            <MapContainer className="mainMap" center={[37.8017, -122.3394]} zoom={11} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[37.86248870618779, -122.37885512075702]}>
                    <Popup>
                        There's probably fish here.
                    </Popup>
                </Marker>
                <Marker position={[37.87177211344883, -122.25949238073825]}>
                    <Popup>
                        There's a lot of squirrels and bears here.
                    </Popup>
                </Marker>
                <Marker position={[37.75263747699897, -122.42092369463343]}>
                    <Popup>
                        There's a lot of cats here. (It's really fun and calming)
                    </Popup>
                </Marker>
                <Marker position={[37.75000975412356, -122.1452940572979]}>
                    <Popup>
                        There's a lot of everything here.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default MapPage;