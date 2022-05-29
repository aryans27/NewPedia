import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {    //rcc- react class component
  render() {
    return (
      <div>
        <Router>
          <Navbar title="NewsPedia" />
          <div className="container my-3" >
            <Routes>
              {/* The idea for exact and giving a unique key is to enable changes inside the dom when a button is clicked
              what happens is the react dom assums the changes are made an dhence doesn't change the dom , when exact is added, chnges are made but not reflected until page is reloaded, so to enable auto update, key is used, which has to be unique */}
              <Route exact path="/general" element={<News key="0" pageSize={15} country="in" category="general" />} />          
              <Route exact path="/" element={<News key="1" pageSize={15} country="in" category="general" />} />         
              <Route exact path="/business" element={<News key="2" pageSize={15} country="in" category="business" />} />          
              <Route exact path="/entertainment" element={<News key="3" pageSize={15} country="in" category="entertainment" />} />          
              <Route exact path="/sports" element={<News key="4" pageSize={15} country="in" category="sports" />} />          
              <Route exact path="/technology" element={<News key="5" pageSize={15} country="in" category="technology" />} />          
              <Route exact path="/health" element={<News key="6" pageSize={15} country="in" category="health" />} />          
              <Route exact path="/business" element={<News key="7" pageSize={15} country="in" category="science" />} />         
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}