import React, { Component } from 'react';
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";


class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Home />
   
      </div>
    );
  }
}

export default App;

