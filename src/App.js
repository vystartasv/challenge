import React from 'react';
import logo from './logo.svg';
import './App.css';
import DriverDetails from "./DriverDetails";
// import Countries from "./Countries";

function App() {
  return (
      <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DriverDetails/>
        {/*<Countries />*/}
      </header>

    </div>
        <DriverDetails/>
      </div>
  );
}

export default App;
