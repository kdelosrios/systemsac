import {
    CONDITIONS_REQUEST,
    CONDITIONS_SUCCESS,
    CONDITIONS_FAIL,
    CONDITION_ID_REQUEST,
    CONDITION_ID_SUCCESS,
    CONDITION_ID_FAIL,
    CLEAR_ERRORSC,
    CLEAR_ERRORSCI
} from "../constants/registerConstants";

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

/// REDUCER PARA BUSCAR CONDITCIONES POR ID

export const conditionsByIdReducer = (state = {conditions:null}, action) => {
    switch(action.type) {
        case CONDITION_ID_REQUEST:
            return {
                loading: true, 
                conditions:null, 
            };
        case CONDITION_ID_SUCCESS:
            return {
                loading: false, 
                conditions: action.payload,
            };
        case CONDITION_ID_FAIL:
            return {
               
                loading: false, 
                error: action.payload 
            };
        case CLEAR_ERRORSCI:
            return {
                ...state,
                error: null 
            };
        default:
            return state; 
    }
};