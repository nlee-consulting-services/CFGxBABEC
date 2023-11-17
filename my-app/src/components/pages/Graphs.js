import "./Graphs.css";
import Navbar from "../navbar.js";
import React, {Component} from "react";
import Plot from 'react-plotly.js'
import {returnBarGraph, tempData} from './GraphDataGen'

function Graphs(){

    return (
        <div class='wrapper'>
            <Navbar />
            <h1>Graphs</h1>
            {returnBarGraph(tempData, 600, 1200, 'Temp Data Graph')}
        </div>
    )








}
export default Graphs;