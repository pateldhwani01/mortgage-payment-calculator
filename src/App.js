import React from 'react';
import {Calculator} from './components/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mortgage Payment Calculator</h1>
      </header>
      <Calculator />
    </div>
  );
}

export default App;
