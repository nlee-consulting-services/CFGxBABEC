import "./Graphs.css";
import Navbar from "../navbar.js";
import React, { Component, useEffect, useState } from "react";
import Plot from "react-plotly.js";
import {
  returnBarGraph,
  returnGroupedBarGraph,
  tempData,
  wolbachiaPerInsectData,
} from "./GraphDataGen";

function Graphs() {
  const [groupedGraph, setData] = useState(null);
  useEffect(() => {
    const getGraph = async () => {
      try {
        const result = await returnGroupedBarGraph(
          wolbachiaPerInsectData,
          600,
          1200,
          { l: 50, r: 50, b: 100, t: 100, pad: 4 },
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
    <div class="wrapper">
      <Navbar />
      <h1>Graphs</h1>
      {groupedGraph ? (
        // Render using the fetched data
        <p>{groupedGraph}</p>
      ) : (
        // Loading while waiting for data
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Graphs;
