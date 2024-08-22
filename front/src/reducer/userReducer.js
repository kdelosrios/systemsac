
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,

  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,

  CLEAR_ERRORS,

  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,

  USER_REQUEST,
  USER_SUCCESS,
  USER_FAIL,
} from "../constants/userConstans";

export const authReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
    case LOAD_USER_REQUEST:
        return {
        loading: true,
        isAuthenticated: false,
        user: null,
      };
    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case LOAD_USER_SUCCESS:
    
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT_SUCCESS:
      return{
        loading:false,
        isAuthenticated:false,
        user:null
      }
    case LOGOUT_FAIL:
      return {
        ...state,
        error:action.pay
      }

    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

   
    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

const initialState = {
  loading: false,
  users: [],
  error: ''
};
 
export const userReducer =(state =initialState,action)=>{
  
  switch(action.type){
    case USER_REQUEST:
      return{
        ...state,
        loading:true,
        users:[]
      };
    case USER_SUCCESS:
      return{
        loading:false,
        users:action.payload.users,
        count: action.payload.count
       
      };
    case USER_FAIL:
      return{
        loading: false,
        error: action.payload
      };
      case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
      default: 
      return state;
  }
}