import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import{Navigate} from "react-router-dom";
import {loadUser} from "../../actions/userAction"

const ProtectedRoute = ({children, isAdmin}) =>{
    const {isAuthenticated=false, loading=true, user}=useSelector((state)=> state.auth)
    const dispatch=useDispatch();

    useEffect(()=>{
        if(!user && loading){
            dispatch(loadUser());
        }
    },[dispatch,user, loading])

    if(loading)
        return <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>;
    if(loading===false && isAuthenticated){
        if(isAdmin===true && user.role!=="admin"){
            return <Navigate to="/"/>
        }
        return children;
    }
    else{
        return <Navigate to={"/"}/>
    }
    }

export default ProtectedRoute;
    
