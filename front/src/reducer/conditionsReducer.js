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
                conditions: [] 
            };
        case CONDITIONS_SUCCESS:
            return {
               
                loading: false, 
                conditions: action.payload.conditions, // ESTA PENDIENTE CREAR EL CONTROLADOR EN EL BACK
                count: action.payload.count 
            };
        case CONDITIONS_FAIL:
            return {
                ...state,
                loading: false, // La solicitud ha terminado con error
                error: action.payload // Guarda el error para mostrarlo en la UI
            };
        case CLEAR_ERRORSC:
            return {
                ...state,
                error: null // Limpia el error cuando sea necesario
            };
        default:
            return state; // Retorna el estado actual si no se maneja ninguna acción
    }
};