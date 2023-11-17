import 'leaflet/dist/leaflet.css';
import './MapPage.css'
import Navbar from "../navbar.js";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { MarkerMuster } from 'react-leaflet-muster';
import L, { marker, map } from 'leaflet';
import {returnBarGraph, tempData} from './GraphDataGen'
import {useState} from "react";
import Footer from "../footer.js";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function MarkerDataComponent() {

    const map = useMap();
    const [markerData, setMarkerData] = useState([]);
    fetch('https://cfgxbabec.onrender.com/records', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            //             // console.log(map.)
            //             // for (var i in data) {
            //             //     var latlng = L.latLng({lat: data[i].location_lat, lng: data[i].location_lon});
            //             //     L.marker(latlng).addTo(map);
            //             // }
            setMarkerData(data);
        })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    return markerData.map((row) => (<Marker
        key={row.record_id}
        position={[row.location_lat, row.location_lon]}
    />));
}

function MapPage() {
    const [showPopup, setShowPopup] = useState(true);

    // we would be centering our map and updatign icon color based with the onClick function right ? think we need to pass in marker referencne 
    // so we can setView() for centering map based on the lat/long for it 
    const onClick = () => {
        console.log("onclick");setShowPopup(!showPopup);
        // map.setView -> function for centering
        // if (showPopup){
        //     Marker.Icon(
        //         {iconUrl: './logo.png'})
        //     }
        }
    

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
                    <Marker position={[37.86248870618779, -122.37885512075702]} eventHandlers={{ click: onClick }}></Marker>
                    <Marker position={[37.87177211344883, -122.25949238073825]} eventHandlers={{ click: onClick }}></Marker>
                    <Marker position={[37.75263747699897, -122.42092369463343]} eventHandlers={{ click: onClick }}></Marker>
                    <Marker position={[37.75000975412356, -122.1452940572979]} eventHandlers={{ click: onClick }}></Marker>
                    <MarkerDataComponent />
                </MarkerMuster>
            </MapContainer>

            <div className='popup' style={{display: showPopup ? 'block' : 'none'}}>
                <h3>This is a placeholder div</h3>
                {returnBarGraph(tempData, 300, 350, 'Temp Data Graph')}
                <img className="logo" src="./logo.png" />
                <p>I'm bad a JS so if there's a way to open/close this for like an onclick event that might work?</p>
                {/*https://stackoverflow.com/questions/40901539/arbitrary-function-on-react-leaflet-marker-click*/}
            </div>
            {/*<Footer /> this breaks for some reason probably bc the map is fixed, will deal with later.*/}
        </div>
    );
}

// function PopUpContent({contentName, text, image}) {
//     return (
//         <div class = "contentName" > 
//         <h3> {text} </h3>
//         <img src = {image} />
//         </div>
//     )
// }

export default MapPage;