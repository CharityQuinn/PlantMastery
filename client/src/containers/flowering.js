import React, { Component } from 'react';
import API from '../utils/API';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import "./type.css";


class Flowering extends Component {
  state = {
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

  handleLike = () => {
    let likePlant = this.state.flowerList.likePlant === true;
    this.setState({
      flowerList: likePlant
    });
  };

  handleDislike = event => {
    this.state.flowerList.plant.id.hide();
    let flowerList = this.state.flowerList.map();
    this.setState({
      flowerList: flowerList
    });
  };

  render() {
    return (
      <div className="row">
        <React.Fragment>
          {this.state.flowerList.length ? this.state.flowerList.map(plant => (
            <Flippy
              key={plant._id}
              flipOnHover={false}
              flipOnClick={true}
              flipDirection="horizontal"
              ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: '268px', height: '60vh', margin: "5% 2%", padding: "2% 0 20% 0" }} /// these are optional style, it is not necessary
            >
              <FrontSide>
                <div className="col-12 col-sm-6 col-md-4 plantCard justify-content-center" key={plant._id}>
                  <div className="card" style={{ width: '268px' }}>
                    <img src={plant.image} alt={plant.name} style={{ height: '160px' }} />
                    <div className="card-body" style={{ width: '268px', height: '251px' }}>
                      <h5 className="card-title">{plant.name}</h5>
                      <p className="card-text"> {plant.description}</p>

                      <div className="btn-group" role="group" aria-label="Basic example">
                        <a href={plant.link} ><button type="button" className="btn btn-success">See More</button></a>
                        <button type="button" className="btn btn-primary" id="BtnLike" onClick={this.handleLike}>Like Plant</button>
                        <button type="button" className="btn btn-secondary" id="BtnDisLike" onClick={this.handleDislike}>Dislike Plant</button>
                      </div>

                    </div>
                  </div>
                </div>
              </FrontSide>
              <BackSide
                style={{ backgroundColor: '#175852', color: 'white' }}>
                <p className="card-text">
                  <strong>Description</strong>: {plant.description}{' '}
                </p>
              </BackSide>
            </Flippy>
          )) : ""}
        </React.Fragment>
      </div>
    )
  }

};

export default Flowering;



