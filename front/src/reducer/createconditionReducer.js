import {
    CREATE_CONDITION_REQUEST,
    CREATE_CONDITION_SUCCESS,
    CREATE_CONDITION_FAIL,
    CLEAR_ERRORSC,
    
}from "../constants/registerConstants";


const initialState={
    loading:false,
    condition: null,
    error:null
};

const createConditionReducer=(state=initialState, action)=>{
    
    switch(action.type){
        case CREATE_CONDITION_REQUEST:
            return {
                ...state,
                loading:true
            };
        case CREATE_CONDITION_SUCCESS:
            return {
                loading:false, 
                condition:action.payload, 
                error:null
            };
        case CREATE_CONDITION_FAIL:
            return {
                loading:false,
                condition:null,
                error:action.payload
            };
        case CLEAR_ERRORSC:
            return {
                ...state,
                error: null
        };default:
            return state;
    }
}

export default createConditionReducer;