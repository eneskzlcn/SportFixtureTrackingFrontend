import axios from "axios";
const port = 44371;

class API {
    constructor()
    {
        this.client = axios.create({baseURL:"https://localhost:"+port+"/api"})
    }
    async GetClubs(){
        return await this.client.get('/Clubs').then(r => r.data)
    }
    async GetClub(id){
        return await this.client.get('/Clubs/'+id).then(r => r.data);
    }
    async UpdateClub(id,updatedClub){
        return await this.client.put('/Clubs/'+id ,updatedClub).then(r => r.status);//api return status OK when it is success
    }
    async DeleteClub(id){
        return await this.client.delete('/Clubs/'+id ).then(r => r.status);//api return status OK when it is success
    }
}
const Api = new API()
export default Api