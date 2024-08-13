import {
    CONDITIONS_REQUEST,
    CONDITIONS_SUCCESS,
    CONDITIONS_FAIL,
    CLEAR_ERRORSC
} from "../constants/actions";

const initialState = {
    loading: false,
    conditions: [], 
    count: 0, 
    error: null
};

export const conditionsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONDITIONS_REQUEST:
            return {
                loading: true, 
                conditions: [], 
                count: 0,
                error: null
            };
        case CONDITIONS_SUCCESS:
            return {
                loading: false, 
                conditions: action.payload.registrosc, // Asegúrate de usar 'registrosc'
                count: action.payload.count
            };
        case CONDITIONS_FAIL:
            return {
                ...state,
                loading: false, 
                error: action.payload 
            };
        case CLEAR_ERRORSC:
            return {
                ...state,
                error: null 
            };
        default:
            return state; 
    }
};