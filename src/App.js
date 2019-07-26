import React, { Component } from 'react'
import Home from './pages/Home'
import './App.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api'

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

export default App;
