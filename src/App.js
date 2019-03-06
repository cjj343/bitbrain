import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';
import ImageLink from './Components/ImageLink/ImageLink.js';
import Rank from './Components/Rank/Rank.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecog from './Components/FaceRecog/FaceRecog.js';


const app = new Clarifai.App({
 apiKey: '8121cd4b17634bfa93295385c6ac9b49'
});

const particlesOptions = {
	particles: {
		number: {
			value: 100,
			density: {
				enable: true,
				value_area: 800
			}
		}
	}
}
class App extends Component {
  constructor() {
	  super();
	  this.state = {
		  input: '',
		  imageUrl: '',
		  box: {}
	  }
  }
  
 calculateFaceLocation = (data) => {
	  const face = data.outputs[0].data.regions[0].region_info.bounding_box;
	  const image = document.getElementById('input');
	  const width = Number(image.width);
	  const height = Number(image.height);
	  console.log(width);
	  console.log(height);
	  return {
		  leftCol: face.left_col * width,
		  topRow: face.top_row * height,
		  rightCol: width - (face.right_col * width),
		  bottomRow : height - (face.bottom_row * height)
	  }
  }
  
  displayFaceBox = (box) => {
	  this.setState({box: box});
  }
  
 onInputChange = (event) => {
	  this.setState({ input: event.target.value });
  }
  
  onButtonSubmit = () => {
	this.setState({imageUrl: this.state.input});
	app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
	.then(response => this.displayFaceBox(this.calculateFaceLocation(response)))		
	.catch(err => console.log(err));
  }
  
 render() {
    return (
      <div className="App">
		<Particles className='particles' params={particlesOptions}/>
		<Navigation />
		<Logo />
		<Rank />
		<ImageLink onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>	
		<FaceRecog box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
