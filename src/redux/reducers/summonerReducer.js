import types from '../types';

const GET_SUMMONER = types.GET_SUMMONER;
const defaultState = {
	text:""
};

function reducer(state = defaultState.text, {type,payload}){
	console.log("Reducer Caller summonerReducer.js")
	switch(type){

		case 'getSummoner':{
			return payload;
		}
		default:
		return state;
	}
	}

export default reducer;