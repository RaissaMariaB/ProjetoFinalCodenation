import axios from 'axios';
import {API_DOMAIN} from "../enviroment";

const getData = () => {
  return axios.get(`${API_DOMAIN}/api/v1/catalog`)
};

export default getData;
