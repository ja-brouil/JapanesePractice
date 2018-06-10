import React, { Component } from 'react';
import Background from './components/Background.js';
import Hiragana from './components/Hiragana.js';
import Title from './components/Title.js';
import './css/app.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
          <Title />
          <Background />
          <Hiragana />
      </div>
    );
  }
}

export default App;
