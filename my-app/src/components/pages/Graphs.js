import "./Graphs.css";
import Navbar from "../navbar.js";
import React, {Component} from "react";
import Plot from 'react-plotly.js'
import {returnBarGraph, returnGroupedBarGraph, tempData, wolbachiaPerInsectData} from './GraphDataGen'

async function Graphs(){
    return (
        <div class='wrapper'>
            <Navbar />
            <h1>Graphs</h1>
            {returnGroupedBarGraph(wolbachiaPerInsectData, 600, 1200, 'Temp Data Graph')}
        </div>
    )
}
export default Graphs;