import React, { Component } from 'react';
//import Background from './components/Background.js';
import Hiragana from './components/Hiragana.js';
import Title from './components/Title.js';
import './css/app.css';
import BackgroundContainer from './components/BackgroundContainer.js';

class App extends Component {
  
  render() {
    return (
      <div className="App">
          <Title />
          <Hiragana />
          <BackgroundContainer />
      </div>
    );
  }
}
//<Background />
export default App;
