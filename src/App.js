import React from "react";
import "./App.css";
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';

function App(){
  return (
    <HashRouter>
     <Route path="/" exact={true} componenet={Home}/>
     <Route path="/about" componenet={About}/>
    </HashRouter>
  );
}

export default App;