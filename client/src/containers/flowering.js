import React, { Component } from 'react';
import API from '../utils/API';

class Flowering extends Component {
  state = {
    succulentList: [],
    foliageList: [],
    flowerList: []
  };

  componentDidMount() {
    this.getPlants();
    // this.setState({
    //   flowerList: this.props.flowers
    // })
  }

  getPlants = () => {
    API.getSavedPlants()
      .then(res => {

        let flower = "Flowering House Plants"
        flower = res.data.filter(plant => plant.plantType === flower);

        this.setState({
          flowerList: flower
        });
      }) 
      .catch(err => console.log(err));
  };

  removePlant = PlantId => {
    API.deletePlant(PlantId)
      .then(this.getPlants)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="row">
      <React.Fragment>
      {console.log(this.state.flowerList)}
        {this.state.flowerList.length ? this.state.flowerList.map(plant => (
            <div className="col-12 col-sm-6 col-md-4" key={plant._id}>
              <div className="card">
                <img src={plant.image} alt={plant.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{plant.name}</h5>
                  <p className="card-text">Description: {plant.description}</p>
                  <p className="card-text">
                    <strong>Description</strong>: {plant.description}{' '}
                  </p>
                  <a
                    href={plant.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btn btn-success btn-small">
                    See More.
                  </a>
                  <button type="button" className="btn btn-link" id="BtnLike">Like Plant{plant.likePlant}</button>
                  <button type="button" className="btn btn-link" id="BtnDisLike">Dislike Plant</button>
                </div>
              </div>
            </div>
        )) : ""}
    </React.Fragment>
      </div>
  )}

};

export default Flowering;
  
                  

