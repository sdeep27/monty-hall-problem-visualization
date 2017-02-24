import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MontyHall from './MontyHall';
import RightBar from './RightBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MontyProb />
        <MontyBar />
      </div>
    );
  }
}

export default App;
