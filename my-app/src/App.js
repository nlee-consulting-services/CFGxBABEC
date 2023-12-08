import logo from "./logo.svg";
//import React from 'react';
import { useRef, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./components/pages/HomePage";
import About from "./components/pages/AboutPage";
import MapPage from "./components/pages/MapPage";
import EntryForm from "./components/pages/EntryFormPage";
import Graphs from "./components/pages/Graphs";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  const navbarRef = useRef(null);
  const [navbarCurrentHeight, setNavBarCurrentHeight] = useState("70px");
  useEffect(() => {
    if (!navbarRef.current) {
      return;
    }
    const resizeObserver = new ResizeObserver(() => {
      if (navbarRef.current.offsetHeight !== navbarCurrentHeight) {
        setNavBarCurrentHeight(navbarRef.current.offsetHeight);
      }
    });
    resizeObserver.observe(navbarRef.current);
    return function cleanup() {
      resizeObserver.disconnect();
    };
  }, [navbarRef.current]);
  return (
    <div className="App-wrapper">
      <BrowserRouter>
        <Navbar ref={navbarRef} />
        <div
          className="App-belowheader"
          style={{
            paddingTop: navbarCurrentHeight,
          }}
        >
          <div className="App-body">
            <Routes>
              <Route path="/" exact Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/map" Component={MapPage} />
              <Route path="/entryform" Component={EntryForm} />
              <Route path="/data" Component={Graphs} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
