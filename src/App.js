import React from 'react';
import './App.css';
import {HashRouter, Routes} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';

function App () {
  return(
    <HashRouter>
      <Routes path="/" exact={true} componenet={Home}/>
      <Routes path="/about" componenet={About}/>
    </HashRouter>
  )
};

export default App;
