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
    async CreateClub(clubName,clubDescription){
        const club = {clubId:0,clubName:clubName,clubDescription:clubDescription}
        return await this.client.post('/Clubs',club).then(r => r.data)
    }
    async GetTeams(){
        return await this.client.get('/Teams').then(r => r.data)
    }
    async GetTeamsWithQueryParam(queryParam){
        return await this.client.get('/Teams?'+queryParam.name+'='+queryParam.value).then(r => r.data)
    }
    async DeleteTeam(teamId){
        return await this.client.delete('/Teams/'+teamId).then(r => r.status)
    }
    async CreateTeam(team){
        const newTeam = {teamId:0,teamName:team.teamName,playerCount:team.playerCount,sportId:team.sportId,clubId:team.clubId}
        return await this.client.post('/Teams',newTeam).then(r => r.status)
    }
    async GetTeam(teamId){
        return await this.client.get('/Teams/'+teamId).then(r => r.data);
    }
    
    async UpdateTeam(id,updatedTeam){
        return await this.client.put('/Teams/'+id ,updatedTeam).then(r => r.status);//api return status OK when it is success
    }
    async GetSports(){
        return await this.client.get('/Sports').then(r=> r.data);
    }
    async DeleteSport(sportId){
        return await this.client.delete('/Sports/'+sportId).then(r => r.status)
    }
    async GetFixtures(){
        return await this.client.get('/Fixtures').then(r=> r.data);
    }
    async DeleteFixture(fixtureId)
    {
        return await this.client.delete('/Fixtures/'+fixtureId).then(r => r.status)

    }
    async UpdateFixture(fixtureId,fixture){
        return await this.client.put('/Teams/'+fixtureId ,fixture).then(r => r.status);//api return status OK when it is success
    }
    async CreateFixture(fixture){
        const newFixture = {fixtureId:0,...fixture}
        return await this.client.post('/Fixtures',newFixture).then(r=> r.status);
    }
    async GetFixture(fixtureId){
        return await this.client.get('/Fixtures/'+fixtureId).then(r => r.data);
    }
    async CreateFixtureResult(fixtureResult)
    {
        const newFixtureResult = {resultId:0,...fixtureResult}
        return await this.client.post('/FixtureResults',newFixtureResult).then(r=> r.status);
    }
    async GetFixtureResults()
    {
        return await this.client.get('/FixtureResults').then(r=> r.data);
    }
}
const Api = new API()
export default Api