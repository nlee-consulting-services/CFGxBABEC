import 'leaflet/dist/leaflet.css';
import './MapPage.css'
import Navbar from "../navbar.js";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { MarkerMuster } from 'react-leaflet-muster';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function MapPage() {
    return (
        <div className='wrapper'>
            <Navbar />
            <h1> Map </h1>
            <MapContainer className="mainMap" center={[37.8017, -122.3394]} zoom={11} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerMuster>
                    <Marker position={[37.86248870618779, -122.37885512075702]} onClick={ShowSidebar()}>{/*this doesn't work not sure how to fix -alex */}
                        <Popup>this one</Popup>
                    </Marker>
                    <Marker position={[37.87177211344883, -122.25949238073825]}></Marker>
                    <Marker position={[37.75263747699897, -122.42092369463343]}></Marker>
                    <Marker position={[37.75000975412356, -122.1452940572979]}></Marker>
                </MarkerMuster>
            </MapContainer>
            <div class='popup'>
                <h3>This is a placeholder div</h3>
                <p>placeholder text and placeholder for a graph</p>
                <img className="logo" src="./logo.png" />
                <p>I'm bad a JS so if there's a way to open/close this for like an onclick event that might work?</p>
                {/*https://stackoverflow.com/questions/40901539/arbitrary-function-on-react-leaflet-marker-click*/}
            </div>
        </div>
    );
}

function ShowSidebar() { //idk what's happening
    return (
        <div class='popup'>
            <h3>This is a placeholder div</h3>
            <p>placeholder text and placeholder for a graph</p>
            <img className="logo" src="./logo.png" />
            <p>I'm bad a JS so if there's a way to open/close this for like an onclick event that might work?</p>
            {/*https://stackoverflow.com/questions/40901539/arbitrary-function-on-react-leaflet-marker-click*/}
        </div>
    )
}

export default MapPage;