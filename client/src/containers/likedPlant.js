import React, {Component} from "react";
import API from "../utils/API";


class LikedPlant extends Component {
  state = {
    likedList: [],
    savedData: {}
  }

  componentDidMount() {
    //const plantId = this.props.match.params.plantId;
    getPlantById();
    
  }

  getPlantById = () => {
    API.getPlantById()
    .then(res => {
      let likedGreen = res.data.filter(plant => plant.likedPlant === true);
      this.setState({
        likedList: likedGreen
      })
    })
    .then(() => this.getLocalStorage())
    console.log("Inside LikedPlant this is plantdata " + plantData)
    .catch(err => console.log(err))
  }
    
  getLocalStorage = () => {
    let storage = [];
    this.state.likedList.map( plant => (
      localStorage.getItem(plant.name)
      ? storage.push(plant.name)
      : ""
    ))
    this.setState({localStorage: storage});
  }
  
  render() {
    return (
      <React.Fragment>
      {Object.keys(this.state.plantData).length ? lchmodSync.stringify(this.state.plantData, null, 2) : ""}
      
      </React.Fragment>
    )
  }
}
export default LikedPlant;