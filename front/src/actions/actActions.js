import axios from "axios";

import {
    ACTS_REQUEST,
    ACTS_SUCCESS,
    ACTS_FAIL,
    CLEAR_ERRORSA,
   
} from '../constants/actions';


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

