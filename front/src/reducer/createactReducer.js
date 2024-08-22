import{
    CREATE_ACT_REQUEST,
    CREATE_ACT_SUCCESS,
    CREATE_ACT_FAIL,
    CLEAR_ERRORSA
   }
    from '../constants/registerConstants'

const initialState={
    loading:false,
    act: null,
    error:null
};

const createActReducer=(state=initialState, action)=>{
    
    switch(action.type){
        case CREATE_ACT_REQUEST:
            return {
                ...state,
                loading:true
            };
        case CREATE_ACT_SUCCESS:
            return {
                loading:false, 
                act:action.payload, 
                error:null
            };
        case CREATE_ACT_FAIL:
            return {
                loading:false,
                act:null,
                error:action.payload
            };
        case CLEAR_ERRORSA:
            return {
                ...state,
                error: null
        };default:
            return state;
    }
}

export default createActReducer;