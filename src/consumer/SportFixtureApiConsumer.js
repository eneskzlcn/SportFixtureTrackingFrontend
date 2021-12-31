import axios from "axios"
export default class SportFixtureApiConsumer {
    constructor(url) {
        if (url == undefined || url == '') url = "172.0.0.1:3000";
        if (url.endsWith("/")) url = url.substr(0, url.length - 1)
        this.url = url;
    }
    toPath = (path) => {
        if (!path.startsWith("/")) path = "/" + path
        return this.url + path;
    }
    async getSports() {
        return axios.get(this.toPath("/api/Sports"))
            .then(r => r.data);
    }
}