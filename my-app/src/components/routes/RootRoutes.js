import React from "react";
import PropTypes from "prop-types";
import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Map from './pages/MapPage'
import EntryForm from './pages/EntryFormPage'
import Graphs from './pages/Graphs'

export default function RootRoutes() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/map" element={<Map />} />
                <Route path="/entryform" element={<EntryForm />} />
                <Route path="/data" element={<Graphs />} />
            </Routes>
        </>
    );
}