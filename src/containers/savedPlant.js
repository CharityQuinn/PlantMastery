import React, { Component } from 'react';
import API from '../utils/API';



class SavedPlant extends Component {
  state = {
    savedData: [],
    flowerList: [],
    // foliageList: [],
    // succulantList: [],
    localStorage: []
  };
  
  componentDidMount() {
    const plantName = this.props.match.params.plant.name;
    getLocalStorageFlower(plantName);
    // API.getPlantById(plantName)
    // // ?To set state, should I use date or plantId?
    // .then(res => this.setState({plantData: res.date})) 
    // .catch(err => console.log(err));
  }
  
  getLocalStorageFlower = () => {
    let storage = [];
    this.state.flowerList.map( plant => (
      localStorage.getItem(plant.name)
      ? storage.push(savedData)
      : ""
      ))
      console.log("Flower savedData: " + savedData);
      this.setState({localStorage: storage});
    }
  // getLocalStorageFoliage = () => {
  //   let storage = [];
  //   this.state.foliageList.map( plant => (
  //     localStorage.getItem(plant.name)
  //     ? storage.push(savedData)
  //     : ""
  //   ))
  //   console.log("Foliage savedData: " + savedData);
  //   this.setState({localStorage: storage});
  // }
  // getLocalStorageSucculant = () => {
  //   let storage = [];
  //   this.state.succulantList.map( plant => (
  //     localStorage.getItem(plant.name)
  //       ? storage.push(savedData)
  //       : ""
  //   ))
  //   console.log("Succulent savedData: " + savedData);
  //   this.setState({localStorage: storage});
  // }
        
        
  render() {
    return (
      <div className="row" style={{ margin: "0" }}>
        {this.state.savedData.length ? this.state.savedData.map(plant => (
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

              <div className="btn-group" role="group" aria-label="Basic example" style={{ postion: "absolute", bottom:    "5px" }}>
                <a href={plant.link} ><button type="button" className="btn btn-success">See More</button></a>
                <button type="button" className="btn btn-primary" id="BtnLike" onClick={() => this.handleLike(plant.name) }>Like Plant</button>
                <button type="button" className="btn btn-secondary" style={{ marginLeft: "-5px" }}
                  id="BtnDisLike" onClick={() => this.handleDislike(plant.name)}>Dislike Plant</button>
              </div>
            </div>
          </div>
        )) : ""}
        <React.Fragment>
          {Object.keys(this.state.plantName).length ? lchmodSync.stringify(this.state.plantName, null, 2) : ""}
        </React.Fragment>
      </div>
    )
  }
   
};



export default SavedPlant;