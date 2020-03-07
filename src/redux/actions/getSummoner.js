import getSummonerApi from '../services/api';
export const type = 'getSummoner';

const getSummoner = () => async (dispatch,getState) => {
	
		getSummonerApi()
		.then((resp)=>{
		dispatch({
 		type:type,
 		payload:resp.data
		});
		});

 };
	
	



export default getSummoner;