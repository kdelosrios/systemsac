import axios from "axios";

import {
    CONDITIONS_REQUEST,
    CONDITIONS_SUCCESS,
    CONDITIONS_FAIL,

    CONDITION_ID_REQUEST,
    CONDITION_ID_SUCCESS,
    CONDITION_ID_FAIL,

    CREATE_CONDITION_REQUEST,
    CREATE_CONDITION_SUCCESS,
    CREATE_CONDITION_FAIL,

    CLEAR_ERRORSC,
    CLEAR_ERRORSCI,
    
    
} from '../constants/registerConstants';

 // DETALLE PARA DE CONDICIONES

export const getConditions = () => async (dispatch) => {
    try {
        dispatch({ type: CONDITIONS_REQUEST });
        const { data } = await axios.get('/api/registroc');
        console.log('API Response Data:', data);

        dispatch({
            type: CONDITIONS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: CONDITIONS_FAIL,
            payload: error.response.data.message
        });
    }
};

// clear error

export const clearErrorsc = ()=> async(dispatch)=>{
    dispatch({
        type: CLEAR_ERRORSC
    })
}

// DETALE DE CONDICIONES POR ID


export const getConditionsByID = (id) => async (dispatch) => {
    try {
        dispatch({ type: CONDITION_ID_REQUEST });
        const { data } = await axios.get(`api/registroc/:${id}`);
        

        dispatch({
            type: CONDITION_ID_SUCCESS,
            payload: data.condition
        });
    } catch (error) {
        dispatch({
            type: CONDITION_ID_FAIL,
            payload: error.response.data.message
        });
    }
};

// clear error

export const clearErrorscByID = ()=> async(dispatch)=>{
    dispatch({
        type: CLEAR_ERRORSCI
    })
}

// DETALLES PARA LA CREACIÓN DE UNA CONDICIÓN

export const createCondition = (formData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_CONDITION_REQUEST });

        const { data } = await axios.post('/api/newregistroc', formData);

        dispatch({
            type: CREATE_CONDITION_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CREATE_CONDITION_FAIL,
            payload: error.response?.data?.message || error.message,
        });
    }
};