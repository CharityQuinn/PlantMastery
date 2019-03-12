import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Flowering from "./containers/flowering";
import Succulents from "./containers/succulents";
import Foliage from "./containers/foliage";
import API from './utils/API';



class App extends Component {

  state = {
    succulentList: [],
    foliageList: [],
    flowerList: []
  };

  componentDidMount() {
    this.getPlants();
  }

  getPlants = () => {
    API.getSavedPlants()
      .then(res => {
        let succulentB = "Succulents and Cacti";
        let foliagesB = "Foliage Type Plants";
        let flowerB = "Flowering House Plants"
        let succulent2 = res.data.filter(plant => plant.plantType === succulentB);
        let foliages2 = res.data.filter(plant => plant.plantType === foliagesB);
        let flower2 = res.data.filter(plant => plant.plantType === flowerB);

        this.setState({
          succulentList: succulent2,
          foliageList: foliages2,
          flowerList: flower2
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Router>
        <div className="App">

          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/flowers" render={() => <Flowering flowers={this.state.flowerList} />} />
            <Route exact path="/succulents" render={() => <Succulents succulents={this.state.succulentList} />} />
            <Route exact path="/foliage" render={() => <Foliage foliage={this.state.foliage} />} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;

