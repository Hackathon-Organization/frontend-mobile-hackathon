import api from "../plugins/api";

class ParticipanteServices {
  async getAllParticipantes() {
    const response = await api.get("/participantes/");
    return response.data.results;
  }
  async getParticipantesById(menbro) {
    const response = await api.get(`/participantes/${menbro}`);
    return response.data;
  }
}

export default new ParticipanteServices();
