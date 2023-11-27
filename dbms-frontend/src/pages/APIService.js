const PLAYERS_REST_API = 'http://localhost:8080/getPlayers/james';
class APIService {    
    getPlayers(){
        return fetch(PLAYERS_REST_API,{ 
            method: 'get',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json());        
    }

}

export default new APIService();