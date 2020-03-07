const axios = require('axios');

const reqi = "https://jsonplaceholder.typicode.com/posts/1";

const getSummoner = ()=>{return axios.get(reqi);}
export default {
	summoner: {
		get: getSummoner
	}
}