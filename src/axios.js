//WE CREATE AN INSTANCE OF AXIOS AND EXPORT IT TO USE IT FROM NOW HENCEFORTH.
import axios from "axios";

const instance = axios.create({
  // # CHANGING THE REPORTING OFFICER
  baseURL: "https://daraja-simulation.herokuapp.com/",
  // baseURL: "http://localhost:3003/",
});
export default instance;
