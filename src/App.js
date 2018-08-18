import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    let currentDate = new Date();
    let currentSecond = currentDate.getHours() * 3600 + currentDate.getMinutes() * 60 + currentDate.getSeconds();
    let colourCode = Math.round(currentSecond * 194.1807407).toString(16);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" style={{ backgroundColor: "#" + colourCode }}>
          To get started, edit <code>src/App.js</code> and save to reload. current second is: {currentSecond}. Colour
          code is {colourCode}.
        </p>
      </div>
    );
  }
}

export default App;
