import axios from "axios";

const api = axios.create({
  baseURL: "https://back-hackathon-dev-afgq.3.us-1.fl0.io/api/",
});

export default api;
