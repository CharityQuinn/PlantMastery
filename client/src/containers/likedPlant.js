import React, {Component} from "react";
import API from '../utils/API';

class LikePlant extends Component {
  state = {
    likePlantList:[]
    localStorage:[]  
  };

componentDidMount(){
  this.getPlants();
}

grtPlants = () =>
  API.getSavedPlants()
    .then(res => {
      let liked = res.data.filter(plant => plant.plantType ===)
    })

}