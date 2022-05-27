import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {    //rcc- react class component
  render() {
    return (
      <div>
        <Navbar title="NewsPedia" />
        <News/>
      </div>
    )
  }
}