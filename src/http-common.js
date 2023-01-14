import axios from "axios";

export default axios.create({
  baseURL: "https://profile-spring.onrender.com/api",
  headers: {
    "Content-type": "application/json"
  }
});