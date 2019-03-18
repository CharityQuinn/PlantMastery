import React, {Component} from "react";
import API from "../utils/API";
import DeleteBtn from "../components/Delete";
import NAV from "../components/Nav";
import Home from "../components/Home";

class Plants extends Component {
  state = {
    plants: []
  };

  componentDidMount() {
    this.loadPlants();
  }

  loadPlants = () => {
    API.getSavedPlants()
    .then(res => this.setState({ plants: res.data}))
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Home />
      
        <row>
          {this.state.plants.length ? (
            <div>
              {this.state.plants.map(plant => (
                <PlantItem key={plants._id}>
                 <a href={"/plants/" + plants._id}>                   
                 </a>
                 <DeleteBtn />
                 </PlantItem>
              ))}
            </div>
          )};
        </row>
      </div>  
    )
  };        
};    
         
         
export default Plants;
