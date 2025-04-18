import React from 'react';
import logo from './images/logo.svg';
import './styles/App.css';

import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Content from "./components/Content";


function App() {
  return (
    <div>
      <Navbar active='2'/>
      <Gallery/>
      <Content/>
    </div>
  );
}

export default App;
