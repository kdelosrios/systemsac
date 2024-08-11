import { ACTS_REQUEST, 
    ACTS_SUCCESS,
    ACTS_FAIL,
    CLEAR_ERRORSA} from "../constants/actions";


    const initialState = {
        loading: false,
        acts: [],
        count: 0,
        error: null
    };

export const actsReducer = (state = initialState, action)=>{
    switch(action.type){
        case ACTS_REQUEST:
            return{
                loading:true,
                acts:[]
            }
        case ACTS_SUCCESS:
            return{
                loading:false,
                registrosa:action.payload.registrosa,
                count: action.payload.count
            }
        case ACTS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case CLEAR_ERRORSA:
            return{
                ...state,
                error:null
            }
    
    default:
        return state;

    }
}

 