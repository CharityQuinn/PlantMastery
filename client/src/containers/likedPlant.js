import React, {Component} from "react";
import API from "../utils/API";

let likedList = [];
let savedData = [];
let flower;

class LikedPlant extends Component {
    state = {
    likedList: [],
    savedData: []
  }

  componentDidMount() {
    let l, i;
    for (i = 0; i < localStorage.length; i++) {
    l = localStorage.key(i);
    savedData.push(l);
    }
    console.log(savedData);
    this.setState({savedData})
  };
  getPlants = () => {
    API.getSavedPlants()
    let plant = []
      .then(res => {
        for(let j = 0; j < savedData.length; j++) {
          let flower = localStorage.key(j)
          console.log("flower is " + flower +" plant is " + plant);
          flower = res.data.filter(plant => plant.name === flower);
        }
        this.setState({likedList: flower});
        console.log("This is likedList with a new plant " + likedList);
      })
      .catch(err => console.log(err));
  };
  
  render() {
    return (
      <div className="row" style={{ margin: "0" }}>
        {this.state.likedList.length ? this.state.likedList.map(plant => (
          <div className="col-12 col-sm-12 col-md-4 col-lg-3 plantCard mt-4" key={plant._id}>
            <div className="card"
              style={{
              height: "55vh", width: '268px', position: "relative",
              boxShadow: '10px 5px 20px'
              }}>
  
              <img src={plant.image} alt={plant.name} style={{ height: '160px', boxShadow: '-1px 1px 20px', borderRadius: "20%" }} />
  
                <div className="card-body"
                  style={{ width: '100%', height: '20vh', margin: '2% 0 4% 0'}}>
                  <h5 className="card-title">{plant.name}
                    {this.isLoved(plant.name)
                     ? <i className="fas fa-heart float-right" style={{ color: "red" }}></i>
                     : ""}
                   </h5>
                    <p className="card-text" style={{ paddingRight: "5px", height: "6.3rem", overflowY: "auto" }}> {plant.description}</p>
                </div>
            </div>
      </div>
   
      )) : ""}
        </div>
      )
    }
  
  };
export default LikedPlant;