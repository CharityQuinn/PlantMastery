import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
//import Flowering from "./containers/flowering";
//import Succulents from "./containers/succulents";
//import Foliage from "./containers/foliage";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Router exact path="/" component={Home}/>
          <Router exact path="/" component={Search}/>
          <Router exact path="/" component={Plants}/>
          <Router exact path="/" component={Forums}/>
        </Switch>
      </div>
   
      </Router>
    )
  }
}

export default App;

