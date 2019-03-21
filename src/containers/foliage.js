import React, { Component } from 'react';
import API from '../utils/API';

class Foliage extends Component {
  state = {
    foliageList: [],
    localStorage: []
  };
  
  componentDidMount() {
    this.getPlants();
    // this.setState({
    //   foliageList: this.props.foliage
    // })
  }

  getPlants = () => {
    API.getSavedPlants()
      .then(res => {
        let isFoliages = "Foliage Type Plants";
        let foliages = res.data.filter(plant => plant.plantType === isFoliages);

        this.setState({
          foliageList: foliages
        });
      }) 
      .catch(err => console.log(err));
  };


  handleLike = props => {
    localStorage.setItem(props, true);
    var joined = this.state.localStorage.concat(props);
    this.setState({ localStorage: joined });
  };

  isLoved = props => localStorage.getItem(props);

  handleDislike = props => {
    let foliageList = this.state.foliageList.filter(plant => plant.name !== props);
    this.setState({
      foliageList: foliageList
    });
  };

  render() {
    
    return (
      <div className="row" style={{ margin: "0" }}>
        {this.state.foliageList.length ? this.state.foliageList.map(plant => (
         <div className="col-12 col-sm-12 col-md-4 col-lg-3 plantCard mt-4" key={plant._id}>
         <div className="card"
           style={{
             height: "55vh", width: '268px', position: "relative",
             boxShadow: '10px 5px 20px'
           }}>
            <img src={plant.image} alt={plant.name} style={{ height: '160px', boxShadow: '-1px 1px 20px', borderRadius: "20%" }} />

            <div className="card-body"
              style={{ width: '100%', height: '20vh', margin: '2% 0 4% 0', overflowY: 'hidden' }}>
              <h5 className="card-title">{plant.name}
                  {this.isLoved(plant.name)
                    ? <i className="fas fa-heart float-right" style={{ color: "red" }}></i>
                    : ""}
                </h5>
                <p className="card-text" style={{ paddingRight: "5px", height: "6.3rem", overflowY: "auto" }}> {plant.description}</p>
              </div>

              <div className="btn-group" role="group" aria-label="Basic example" style={{ postion: "absolute", bottom: "5px" }}>
                <a href={plant.link} ><button type="button" className="btn btn-success">See More</button></a>
                <button type="button" className="btn btn-primary" id="BtnLike" onClick={() => this.handleLike(plant.name)}>Like Plant</button>
                <button type="button" className="btn btn-secondary" style={{ marginLeft: "-5px" }}
                  id="BtnDisLike" onClick={() => this.handleDislike(plant.name)}>Dislike Plant</button>
              </div>
            </div>
          </div>
        )) : ""}
      </div>
    )
  }

};



export default Foliage;
