import logo from './logo.svg';
//import React from 'react';
import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom'; 

import Home from './components/pages/HomePage'
import About from './components/pages/AboutPage'
import MapPage from './components/pages/MapPage'
import EntryForm from './components/pages/EntryFormPage'

import Navbar from './components/navbar'

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
    // <div className="App">
    //   <header className="Wolbachia">
       
    //     <a
    //       className=""
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>

    //     MyButton()
    //   </header>
    // <div className = "navbar">
    //   <Link to = "HomePage"></Link>
    // </div>
    // </div>
  );
}

export default App;
