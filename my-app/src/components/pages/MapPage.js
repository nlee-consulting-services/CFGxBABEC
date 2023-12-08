import "leaflet/dist/leaflet.css";
import "./MapPage.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { MarkerMuster } from "react-leaflet-muster";
import L from "leaflet";
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
  const lat = 0;
  const lon = 0;
  const onClick = () => {
    console.log("onclick");
    setShowPopup(!showPopup);
  };

  const [groupedGraph, setData] = useState([null, null]);
  useEffect(() => {
    const getGraph = async () => {
      try {
        const result = await returnGroupedBarGraph(
          wolbachiaPerInsectData,
          450,
          330,
          { l: 20, r: 0, b: 100, t: 100, pad: 5 },
          "Wolbachia Presence"
        );
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getGraph();
  }, []);

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
              groupedGraph[1].map(function (data) {
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

      <div
        className="popup"
        style={{ display: showPopup ? "block" : "none", overflowY: "auto" }}
      >
        <h3>This is a placeholder div</h3>
        {groupedGraph[0] ? (
          // Render using the fetched data
          <p>{groupedGraph[0]}</p>
        ) : (
          // Loading while waiting for data
          <p>Loading...</p>
        )}
        <img className="logo" src="./logo.png" />
        <p>
          I'm bad a JS so if there's a way to open/close this for like an
          onclick event that might work?
        </p>
        {/*https://stackoverflow.com/questions/40901539/arbitrary-function-on-react-leaflet-marker-click*/}
      </div>
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
