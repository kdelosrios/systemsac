import axios from "axios";

import {
    CONDITIONS_REQUEST,
    CONDITIONS_SUCCESS,
    CONDITIONS_FAIL,
    CLEAR_ERRORSC,
    
} from '../constants/actions';

export const getConditions = () => async (dispatch) => {
    try {
        dispatch({ type: CONDITIONS_REQUEST });
        const { data } = await axios.get('api/registroc');
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






