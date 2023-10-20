import logo from './logo.svg';
//import React from 'react';
import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom'; 

import Home from './components/pages/HomePage'
import About from './components/pages/AboutPage'
import MapPage from './components/pages/MapPage'
import EntryForm from './components/pages/EntryFormPage'
import navbar from './components/navbar'

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/map' Component={MapPage} />
          <Route path='/entryform' Component={EntryForm} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
