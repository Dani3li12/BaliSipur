import http from "./http-common";

class StoryService{
    baseUrl = "/stories";
    getAll = async () => {
        const res = await http.get(this.baseUrl + "/")
        // const res = await http.get("http://localhost:3000/api/stories/")
        return res;
    }
}

export default new StoryService();