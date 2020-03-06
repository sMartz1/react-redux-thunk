export const type = 'getSummoner';


const getSummoner = text => {
	console.log("Action called getSummoner.js")
	return {
		type,
		payload: text,
	}
};

export default getSummoner;