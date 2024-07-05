

export class Games{
    constructor(category){
        this.category=category;
    }
   

async getGames(){
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '7ffbbeaf1cmsh54e3f5f656ed28ap177d1cjsn75ca0eaae536',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }
    const data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`,options);
    const response= await data.json();
    return response;

}
}
