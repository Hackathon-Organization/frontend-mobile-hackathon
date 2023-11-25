import api from "../plugins/api";

class ParticipanteServices {
  async getAllParticipantes() {
    const response = await api.get("/participantes/");
    return response.data.results;
  }
  async getParticipantesById(membro) {
    const response = await api.get(`/participantes/${membro}`);
    return response.data;
  }
}

export default new ParticipanteServices();
