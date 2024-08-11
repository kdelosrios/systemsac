import {createStore,combineReducers,applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import { actsReducer } from './reducer/actReducer';

const reducer =combineReducers({
    acts:actsReducer
})
    

let initialState={}

const middleware=[thunk]
const store= createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;


