import React, { Component } from 'react';
import './App.css';
import Monthly from './components/Monthly';
import Total from './components/Total';
import List from './components/List-view';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="left">
          <Monthly />
          <Total />
        </div>
        <List />
      </div>
    );
  }
}

export default App;
