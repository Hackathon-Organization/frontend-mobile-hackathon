import api from "../plugins/api";

class TimeServices {
  async getAllTimes() {
    const response = await api.get("/equipes/");
    return response.data.results;
  }
  GelTimeById(timeid) {
    const response = api.get(`/equipes/${timeid}`);
    return response.data;
  }
}

export default new TimeServices();
