import api from "../plugins/api";

class TimeServices {
  async getAllTimes() {
    const response = await api.get("/equipes/");
    return response.data.results;
  }
  async getTimeById(timeId) {
    const response = await api.get(`/equipes/${timeId}`);
    return response.data;
  }
}

export default new TimeServices();
