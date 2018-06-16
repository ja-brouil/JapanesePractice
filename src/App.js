import React, { Component } from 'react';
import KanaContainer from './components/KanaContainer.js';
import Title from './components/Title.js';
import './css/app.css';
import BackgroundContainer from './components/BackgroundContainer.js';

class App extends Component {
  
  render() {
    return (
      <div className="App">
          <Title />
          <KanaContainer />
          <BackgroundContainer />
      </div>
    );
  }
}
//<Background />
export default App;
