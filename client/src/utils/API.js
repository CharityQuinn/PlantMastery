import axios from "axios";
var express = require("express");

const app = express();



export default {
  getPlants() {
    //return axios.get('/api/plants');
   },
  getPlantById(plantId) {
    return axios.get(`/api/plants/${plantId}`);
  }
  

}