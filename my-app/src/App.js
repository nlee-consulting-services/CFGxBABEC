import logo from "./logo.svg";
//import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./components/pages/HomePage";
import About from "./components/pages/AboutPage";
import MapPage from "./components/pages/MapPage";
import EntryForm from "./components/pages/EntryFormPage";
import Graphs from "./components/pages/Graphs";
import navbar from "./components/navbar";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/map" Component={MapPage} />
          <Route path="/entryform" Component={EntryForm} />
          <Route path="/data" Component={Graphs} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
