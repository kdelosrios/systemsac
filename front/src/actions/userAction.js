import axios from "axios";

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
     UPDATE_PROFILE_FAIL,
    
} from "../constants/userConstans"

// Login

export const login = (email, password) => async (dispatch)=>{
   try{
    dispatch({type:LOGIN_REQUEST})
    
    const config={
        Headers:{
            'Content-Type': 'application/json'
        }
    }
    const {data}= await axios.post('/api/login', {email, password}, config)
    dispatch({
        type:LOGIN_SUCCESS,
        payload:data.user
    })
}
    catch (error){
        dispatch({
            type:LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

// Registro de usuarios

export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST });
        
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };

        const { data } = await axios.post('/api/usuario/registro', userData, config);
        
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        });
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        });
    }
};
 //
 
export const loadUser=()=> async(dispatch)=>{
    try{
        dispatch({type:LOAD_USER_REQUEST})
        const {data} = await axios.get("/api/userid")
        dispatch({
            type:LOAD_USER_SUCCESS,
            payload: data.user
        })
    } catch(error){
        dispatch({
            type:LOAD_USER_FAIL,
            payload:error.response.data.message
        })
    }
}

// ACTUALIZAR USUARIO

export const updateProfile = (userData) => async (dispatch)=>{
    try{
     dispatch({type:UPDATE_PROFILE_REQUEST})
     
     const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };
     const {data}= await axios.put('/api/updateProfile', userData, config)
     dispatch({
         type:UPDATE_PROFILE_SUCCESS,
         payload:data.user
     })
 }
     catch (error){
         dispatch({
             type: UPDATE_PROFILE_FAIL,
             payload: error.response.data.message
         })
     }
 }

// logout user

export const logout= () => async (dispatch)=>{
    try{
        await axios.get("/api/logout")
        dispatch({
            type:LOGOUT_SUCCESS,
        })
    } catch(error){
        dispatch({
            type:LOGOUT_FAIL,
            payload:error.response.data.message
        })
    }
}


// cargar usuarios en tabla

export const getUser=()=> async(dispatch)=>{
    try{
        dispatch({type:USER_REQUEST})
        const {data}= await axios.get('/api/admin/usuarios')

        dispatch({
            type:USER_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// clear error

export const clearErrors=()=> async (dispatch)=>{
    dispatch({
        type: CLEAR_ERRORS
    })
}