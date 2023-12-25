import "leaflet/dist/leaflet.css";
import "./MapPage.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { MarkerMuster } from "react-leaflet-muster";
import L, { latLng, map, popup } from "leaflet";
import {
  returnBarGraph,
  returnGroupedBarGraph,
  tempData,
  wolbachiaPerInsectData,
} from "./GraphDataGen";
import { useState, useEffect } from "react";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function MarkerDataComponent() {
  const map = useMap();
  const [markerData, setMarkerData] = useState([]);
  fetch("https://cfgxbabec.onrender.com/records", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      //             // console.log(map.)
      //             // for (var i in data) {
      //             //     var latlng = L.latLng({lat: data[i].location_lat, lng: data[i].location_lon});
      //             //     L.marker(latlng).addTo(map);
      //             // }
      setMarkerData(data);
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
  return markerData.map((row) => (
    <Marker
      key={row.record_id}
      position={[row.location_lat, row.location_lon]}
    />
  ));
}

function MapPage() {
  const [showPopup, setShowPopup] = useState(true);
  var result = null;
  const height = 450;
  const width = 350;


  const [getLocation, setLocation] = useState([]);
  const [popupTitle, setPopupTitle] = useState(null);
  const [pastPosition, setPastPosition] = useState(null);
  const [generateAllData, setGenerateAllData] = useState(true);
  // function meant to handle when marker is clicked on map
  const onClick = (position) => {
    // setShowPopup(!showPopup);
    const mapPopup = document.getElementById('mapPopup');
    const mapPopupAll = document.getElementById('mapPopupAll');
    //start off with opacity = 0, then onClick makes opacity = 1, etc
    const selectLat = position.latlng['lat'];
    const selectLng = position.latlng['lng'];
    const location = [selectLat, selectLng];

    console.log(position.title)
    // clicking on the same marker
    if (popupTitle == null || (popupTitle != null && popupTitle[0] == selectLat && popupTitle[1] == selectLng)){
        // hiding all data, showing marker data
        if (mapPopup.classList.contains("slide-left")){
            mapPopup.classList.add('slide-right');
            mapPopup.classList.remove('slide-left');
            mapPopupAll.classList.add('slide-left');
            mapPopupAll.classList.remove('slide-right');
            document.getElementById('mapPopupTitle').textContent = location;
            setPopupTitle(location);
            setPastPosition(position);
            setLocation(location);
        }
        // hiding marker data, showing all data
        else {
            mapPopupAll.style.visibility = "visible";
            mapPopup.classList.add('slide-left');
            mapPopup.classList.remove('slide-right');
            mapPopupAll.classList.add('slide-right');
            mapPopupAll.classList.remove('slide-left');
            setPopupTitle(null);
            setLocation([]);
        }
    }
    // clicking on different marker
    else{            
        
        // pastPosition.originalEvent.explicitOriginalTarget.src = 
        // 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png';
//         position.originalEvent.explicitOriginalTarget.src = 
//         'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png';


        console.log(pastPosition);
        if (pastPosition != null){
        }
        setPopupTitle(location);
        document.getElementById('mapPopupTitle').textContent = location;
        setPastPosition(position);
        setLocation(location);
    }
  };

  const [groupedGraph, setGraph] = useState([null, null]);
  const [data, setData] = useState([null, null]);
  useEffect(() => {
    const getGraph = async () => {
      try {
        var newData;
        if (generateAllData){
            newData = await wolbachiaPerInsectData();
        }
        else{
            newData = await wolbachiaPerInsectData([data[2], data[3]], getLocation);
        }
        setData(newData);
        setGraph(returnGroupedBarGraph(
          newData,
          height,
          width,
          { l: 30, r: 0, b: 100, t: 100, pad: 5 },
          "Wolbachia Presence"
        ));
        setGenerateAllData(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getGraph();
  }, [getLocation]);
  return (
    <div className="mappage-wrapper">
      <MapContainer
        className="mainMap"
        center={[37.8017, -122.3394]}
        zoom={11}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerMuster>
          {groupedGraph[1]
            ? // Render using the fetched data
              groupedGraph[1].map(function (data, index) {
                return (
                  <Marker
                    position={data}
                    eventHandlers={{ click: onClick }}
                  ></Marker>
                );
              })
            : // makeIntoMarkers(groupedGraph[1])
              // Loading while waiting for data
              // <Marker position={[0, 0]} eventHandlers={{ click: onClick }}></Marker>
              null}
        </MarkerMuster>
      </MapContainer>
        
        {/* Data for a specific coordinate being displayed */}
        <div
        className="popup slide-left"
        style={{overflowY: "scroll", minWidth:width + 75, borderColor:'green'}}
        id="mapPopup"
      >
        {groupedGraph[0] ? (
          // Render using the fetched data
          <div>
          <h2 id="mapPopupTitle"></h2>
          <p>{groupedGraph[0]}</p>
          <img className="logo" src="./logo.png" />
          </div>
        ) : (
          // Loading while waiting for data
          <div
            style={{height:"100%"}}>      
            <div class="center">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            </div>
          </div>
        )}
      </div>

      {/* All data being displayed by default */}
      <div
        className="popup"
        style={{overflowY: "auto", minWidth:width + 75, borderColor:'grey'}}
        id="mapPopupAll"
      >
        {groupedGraph[0] ? (
          // Render using the fetched data
          <div>
          <h2 id="mapPopupAllTitle">{'All Data'}</h2>
          <p>{groupedGraph[0]}</p>
          <img className="logo" src="./logo.png" />
          </div>
        ) : (
          // Loading while waiting for data
          <div
            style={{height:"100%"}}>      
            <div class="center">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MapPage;
