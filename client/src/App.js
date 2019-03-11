import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
        let succulent = "Succulents and Cacti";
        let foliages = "Foliage Type Plants";
        let flower = "Flowering House Plants"
        succulent = res.data.filter(plant => plant.plantType === succulent);
        foliages = res.data.filter(plant => plant.plantType === foliages);
        flower = res.data.filter(plant => plant.plantType === flower);

        this.setState({
          succulentList: succulent,
          foliageList: foliages,
          flowerList: flower
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
       <Route exact path="/" component={Flowering + this.state.flowerList} />
       <Route exact path="/" component={Succulents + this.state.succulentList} />
       <Route exact path="/" component={Foliage + this.state.foliageList} />
     </Switch>
   
     </div>
     </Router>
    );
  }
}

export default App;

