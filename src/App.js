import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js'
import Logo from './Components/Logo/Logo.js'
import ImageLink from './Components/ImageLink/ImageLink.js'

class App extends Component {
  render() {
    return (
      <div className="App">
		<Navigation />
		<Logo />
		<ImageLink />
		{/*
		
		<FaceRecog />*/}
      </div>
    );
  }
}

export default App;
