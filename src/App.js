import React from 'react';
import {Calculator} from './components/Calculator';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Mortgage Payment Calculator</h1>
      </header>
      <Calculator />
    </div>
  );
}

export default App;
