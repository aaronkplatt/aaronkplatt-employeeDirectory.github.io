import axios from "axios";

//URL GIVEN IN THE READ ME
const BASEURL = "https://randomuser.me/api/?results=200&nat=us";


export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
