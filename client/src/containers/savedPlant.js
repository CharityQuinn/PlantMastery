import React, {Component} from "react";
import API from "../utils/API";


class SavedPlant extends Component {
  state = {
    savedData: {}
  }

  componentDidMount() {
    const plantId = this.props.match.params.plantId;

    API.getPlantById(plantId)
    // ?To set state, should I use date or plantId?
      .then(res => this.setState({plantData: res.date})) 
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
      {Object.keys(this.state.plantData).length ? lchmodSync.stringify(this.state.plantData, null, 2) : ""}
      </React.Fragment>
    )
  }
}
export default SavedPlant;