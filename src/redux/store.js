import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import summonerReducer from './reducers/summonerReducer';


const reducer = combineReducers( {
	summonerReducer
} );

const store = createStore( reducer, composeWithDevTools() );

export default store;
