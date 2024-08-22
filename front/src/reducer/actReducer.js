import { ACTS_REQUEST, 
    ACTS_SUCCESS, 
    ACTS_FAIL,

    ACT_ID_REQUEST,
    ACT_ID_SUCCESS,
    ACT_ID_FAIL,

    CLEAR_ERRORSA,
    CLEAR_ERRORSAI } from "../constants/registerConstants";

const initialState = {
    loading: false,
    acts: [],
    count: 0,
    error: null
};

export const actsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTS_REQUEST:
            return {
                ...state,
                loading: true,
                acts: []
            };
        case ACTS_SUCCESS:
            return {
                loading: false,
                acts: action.payload.registrosa, 
                count: action.payload.count
            };
        case ACTS_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORSA:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};

// REDUCER PARA BUSCAR ACTOS POR ID

export const actsByIdReducer = (state = {act:null}, action) => {
    switch (action.type) {
        case ACT_ID_REQUEST:
            return {
                loading: true,
                acts: null
            };
        case ACT_ID_SUCCESS:
            return {
                loading: false,
                act: action.payload,
            };
        case ACT_ID_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORSAI:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};


