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