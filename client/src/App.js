import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Flowering from "./containers/flowering";
import Succulents from "./containers/succulents";
import Foliage from "./containers/foliage";

class App extends Component {
  render() {
    return (
     <Router>
        <div className="App">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/flowering" component={Flowering} />
              <Route exact path="/succulents" component={Succulents} />
              <Route exact path="/foliage" component={Foliage} />
            </Switch>
       </div>
     </Router>
    );
  }
}

export default App;

