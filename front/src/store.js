import {createStore,combineReducers,applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import { actsReducer,actsByIdReducer } from './reducer/actReducer';
import { conditionsReducer,conditionsByIdReducer } from './reducer/conditionsReducer';
import { authReducer,userReducer } from './reducer/userReducer';

const reducer =combineReducers({
    acts:actsReducer,
    conditions:conditionsReducer,
    actByID:actsByIdReducer,
    conditionbyID:conditionsByIdReducer,
    auth:authReducer,
    users:userReducer
    

    
    
})
    

let initialState={}

const middleware=[thunk]
const store= createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;


