import React, {Component} from "react";
//import API from "../utils/API";


class LikedPlant extends Component {
  state = {
    likedList: [],
    savedData: {}
  }

  componentDidMount() {
    
    this.getLikedPlant();
  }

  getLikedPlant = () => {
    let addLiked = localStorage.getItem(storage);
    this.setState({
        likedList: addLiked
    })
    
      console.log("Inside LikedPlant this is plantdata " + addLiked.plant.name)
    .catch(err => console.log(err))
  }
  
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
                  style={{ width: '100%', height: '20vh', margin: '2% 0 4% 0', overflowY: 'hidden' }}>
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