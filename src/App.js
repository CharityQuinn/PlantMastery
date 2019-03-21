import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Flowering from "./containers/flowering";
import Succulents from "./containers/succulents";
import Foliage from "./containers/foliage";
import SavedPlant from "./containers/savedPlant"

const App = ()=> (
 
      <Router>
        <div className="App">

          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/savedPlant" render={() => <SavedPlant />} />
            <Route exact path="/flowers" render={() => <Flowering />} />
            <Route exact path="/succulents" render={() => <Succulents />} />
            <Route exact path="/foliage" render={() => <Foliage />} />
          </Switch>

        </div>
      </Router>

);

export default App;

