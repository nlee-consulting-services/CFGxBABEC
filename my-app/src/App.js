import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Home from './components/pages/HomePage'
import About from './components/pages/AboutPage'
import Map from './components/pages/MapPage'
import EntryForm from './components/pages/EntryFormPage'

import Navbar from './components/navbar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact component={Home} /> 
        <Route path='/about' component={About} /> 
        <Route path='/map' component={Map} /> 
        <Route path='/entryform' component={EntryForm} /> 
      </Routes> 
    </BrowserRouter>
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
