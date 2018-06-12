import React, { Component } from 'react';
import './App.css';
import Monthly from './components/Monthly';
import Total from './components/Total';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Monthly />
        <Total />
      </div>
    );
  }
}

export default App;
