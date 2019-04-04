import React, { Component } from 'react';
import API from '../../utils/API';
import './LikedPlant.css';


class LikedPlants extends Component {
  state = {
    likedList: [],
    localStorage: []
  };

  componentDidMount() {
    this.getLocalStorage()
    this.getPlants();
  }

  getPlants = () => {
    API.getSavedPlants()
      .then(res => {
        this.state.localStorage.map(localPlants => {
          let plant = res.data.filter(plant => plant.name === localPlants);
          let likedPlants = this.state.likedList.concat(plant);
          this.setState({
            likedList: likedPlants
          })
        })
      })

      .catch(err => console.log(err));
  };

  getLocalStorage = () => {
    let storage = [];
    for (let i = 0; i < localStorage.length; i++) {
      storage.push(localStorage.key(i));
    }
    this.setState({ localStorage: storage });
  }

  handleLike = props => {
    localStorage.setItem(props, true);
    var joined = this.state.localStorage.concat(props);
    this.setState({ localStorage: joined });
    console.log("HandleLike joined: " + joined);
  };

  isLoved = props => localStorage.getItem(props);

  handleDislike = props => {
    let likedList = this.state.likedList.filter(plant => plant.name !== props);
    this.setState({
      likedList: likedList
    });
  };

  filterGetPlants = () => {
    let lovedPlants;
    this.state.localStorage.map(plant => (
      lovedPlants = + this.state.likedList.filter(item => plant.name === plant))
    );
    this.setState({ likedList: lovedPlants })
  }


  render() {
    return (
      <div className="row" style={{ margin: "0" }}>
        {this.state.likedList.length ? this.state.likedList.map(plant => (
          <div className="col-12 col-sm-12 col-md-4 col-lg-3 plantCard mt-4" key={plant._id}>
            <div className="card" style={{height: '65vh', width:'268px', position: 'relative', boxShadow:'10px 5px 20px'}}>

              <img src={plant.image} alt={plant.name} style={{ height: '160px', boxShadow: '-1px 1px 20px', borderRadius: "20%" }} />

              <div className="card-body"
                style={{ width: '100%', height: '20vh', margin: '2% 0 4% 0' }}>
                <h5 className="card-title">{plant.name}
                  {this.isLoved(plant.name)
                    ? <i className="fas fa-heart float-right" style={{ color: "red" }}></i>
                    : ""}
                </h5>
                <p className="card-text" style={{ paddingRight: "5px", height: "6.3rem", overflowY: "auto" }}> {plant.description}</p>
              </div>

              <div className="btn-group" role="group" aria-label="Basic example" style={{ postion: "absolute",  bottom: "5px" }}>
                <a href={plant.link} ><button type="button" className="btn btn-success">See More</button></a>
                <button type="button" className="btn btn-primary" id="BtnLike" onClick={() => { this.handleLike(plant.name) }}>Like Plant</button>
                <button type="button" className="btn btn-secondary" style={{ marginLeft: "-5px" }}
                  id="BtnDisLike" onClick={() => this.handleDislike(plant.name)}>Dislike Plant</button>
              </div>
            </div>
          </div>
           
        )) : ""
        }
         
      </div>  
    
    )
  }
};



export default LikedPlants;



