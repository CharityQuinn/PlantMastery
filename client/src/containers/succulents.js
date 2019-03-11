import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import API from '../utils/API';

class Succulents extends Component {
  state = {
    plantList: []
  };

  componentDidMount() {
    this.getPlants();
  }

  getPlants = () => {
    API.getSavedPlants()
      .then(res => this.setState({ plantList: res.data }))
      
      .catch(err => console.log(err));
  };

  removePlant = PlantId => {
    API.deletePlant(plantId)
      .then(this.getPlants)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        {/* make jumbotron   !!Insert our own Jumbatron code!!*/}
        <div className="jumbotron jumbotron-fluid bg-dark text-light">
          <div className="container-fluid">
            <h1>View Saved Plants Here</h1>
          </div>
        </div>
        {/* create row with two columns */}
        <div className="container-fluid">
          <div className="row">
            {/* begin Plant result section */}
            <div className="col-12">
              {!this.state.plantList.length ? (
                <h2 className="text-center">No Saved Plants To Display</h2>
              ) : (
                <React.Fragment>
                  <h3>Showing Saved Plants</h3>
                  <div className="row">
                    {this.state.plantList.map(plant => {
                      return (
                        <div className="col-12 col-md-4" key={plant._id}>
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
                              <Link to={`/saved/${plant._id}`} className="btn btn-block btn-danger">View plant</Link>
                              <button type="button" class="btn btn-link" id="BtnLike">Like Plant{plant.likePlant}</button>
                              <button type="button" class="btn btn-link" id="BtnDisLike">Dislike Plant</button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Succulents;