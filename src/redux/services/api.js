const axios = require('axios');

const reqi = "https://jsonplaceholder.typicode.com/posts/1";

const getSummonerApi = ()=>{
	console.log("API");
	
	return axios.get(reqi);}


export default getSummonerApi; 