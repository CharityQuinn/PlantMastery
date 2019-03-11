import axios from "axios";
export default {
  savePlants() {
    return axios.get('/api/plants');
   },
  getPlantById(plantId) {
    return axios.get(`/api/plants/${plantId}`);
  },
  putPlantById(plantId) {
    var likePlant = true;
    return axios.get(`/api/plants/${plantId + likePlant}`);
  },
  removePlant(plantId) {
    return axios.delete(`/api/plants/${plantId}`)
  },
  getPlantByName(name) {
    return axios.get(`/api/plants/name/${name}`)
  }
  

}