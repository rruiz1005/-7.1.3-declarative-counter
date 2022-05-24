import React, { useState } from 'react'

import logo from './logo.svg';
import './App.css';

function App() {
  let [ counter, changeCounter ] = useState(1)
  window.changeCounter = changeCounter
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <h1>{counter}</h1>
          <h4>{counter}</h4>
          <h5>{counter}</h5>
        </div>
      </header>
    </div>
  );
}

export default App;
