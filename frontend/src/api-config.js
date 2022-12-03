import axios from 'axios'


const apiURL = '78e4db94d529407b87a710cd2a8ed901'

export const Games = async(state) =>{
    const games= axios.get(`https://api.rawg.io/api/games?key=${apiURL}&dates=2019-09-01,2019-09-30&platforms=18,1,7`);
    console.log(games.data.results);
    
}

