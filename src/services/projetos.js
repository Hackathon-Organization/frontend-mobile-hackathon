import api from "../plugins/api";

class ProjetoServices {
    async getAllProjetos() {
        const response = await api.get("/projetos/");
        return response.data.results;
    }
    getProjetoById(projetoId) {
        const response = api.get(`/projetos/${projetoId}`);
        return response.data.results;
    }
}

export default new ProjetoServices();