import axios from "axios";
const port = 44371;
const API = axios.create({
    baseURL:"https://localhost:"+port+"/api"
})
export default API
