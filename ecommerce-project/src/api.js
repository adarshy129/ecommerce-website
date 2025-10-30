import axios from "axios";

const instance = axios.create({
  baseURL: "https://ecommerce-website-o0mn.onrender.com",
});

export default instance;

