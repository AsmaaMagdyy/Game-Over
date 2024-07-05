export class DetailsGame{
    constructor(id){
        this.id=id;
    }
   

async getDetails(){
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '7ffbbeaf1cmsh54e3f5f656ed28ap177d1cjsn75ca0eaae536',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`,options);
    const response= await data.json();
    return response;

}
}

