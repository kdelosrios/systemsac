import axios from "axios";

import {
    ACTS_REQUEST,
    ACTS_SUCCESS,
    ACTS_FAIL,

    ACT_ID_REQUEST,
    ACT_ID_SUCCESS,
    ACT_ID_FAIL,

    CREATE_ACT_REQUEST,
    CREATE_ACT_SUCCESS,
    CREATE_ACT_FAIL,

    CLEAR_ERRORSA,
    CLEAR_ERRORSAI,
    
   
} from '../constants/actions';

// DETALLE DE LOS ACTOS 

export const getActs=()=> async(dispatch)=>{
    try{
        dispatch({type:ACTS_REQUEST})
        const {data}= await axios.get('api/registroa')

        dispatch({
            type:ACTS_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:ACTS_FAIL,
            payload: error.response.data.message
        })
    }
}

// clear error

export const clearErrorsa = ()=> async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORSA
    })
}

// DETALLE DEL ACTO POR ID

export const getActsByID=(id)=> async(dispatch)=>{
    try{
        dispatch({type:ACT_ID_REQUEST})
        const {data}= await axios.get(`api/registroa/:${id}`)

        dispatch({
            type:ACT_ID_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:ACT_ID_FAIL,
            payload: error.response.data.message
        })
    }
}

// clear error

export const clearErrorsaByID = ()=> async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORSAI
    })
}


// DETALLE POR CREACION DE ACTO

export const createAct = (formData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_ACT_REQUEST });

       
        const {data} = await axios.post('/api/newregistroa', formData);

        dispatch({
            type: CREATE_ACT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CREATE_ACT_FAIL,
            payload: error.response.data.message,
        });
    }
};