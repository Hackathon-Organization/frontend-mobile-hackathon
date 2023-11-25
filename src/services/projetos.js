import api from "../plugins/api";

class ProjetoServices {
  async getAllProjetos() {
    const response = await api.get("/projetos/");
    return response.data.results;
  }
  async getProjetoById(projetoId) {
    const response = await api.get(`/projetos/${projetoId}`);
    return response.data.results;
  }
}

export default new ProjetoServices();
