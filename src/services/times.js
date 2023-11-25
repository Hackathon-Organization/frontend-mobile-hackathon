import api from "../services/api";

class TimeServices {
    async getAllTimes() {
        const response = await api.get("/equipes");
        return response.data;
    }
    GelTimeById(timeid) {
        const response = api.get(`/equipes/${timeid}`);
        return response.data;
    }
}

export default new Times();