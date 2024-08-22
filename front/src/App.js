import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './componentes/Home.js';
import ActsForm from './componentes/forms/ActsForm.js';
import Conditionsform from './componentes/forms/Conditionsform.js';
import Atable from './componentes/tables/Atable.js';
import Ctable from './componentes/tables/Ctable.js';
import Usuarios from './componentes/tables/Usertable.js';
import Login from './componentes/forms/Login.js';
import ForgotPassword from './componentes/forms/forgotPassword.js';
import store from './store.js'
import { loadUser } from './actions/userAction.js';
import Navegation from './componentes/Navegation.js'
import ProtectedRoute from './componentes/routes/ProtectedRoutes.js';
import Register from './componentes/forms/CreateUser.js';
import UpdateProfile from './componentes/forms/UpdateProfile.js';


function App() {
  useEffect(()=>{
    store.dispatch(loadUser)
  },[])
  return (
    <BrowserRouter>
      <div className="App">
       <Navegation/>
       
        <Routes>
          <Route path='/' element={<Login />} />


          <Route path="/" element={<Login />} />
                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
          

          <Route path='/newregistroa' element={<ActsForm />} />
          <Route path='/newregistroc' element={<Conditionsform />} />
          <Route path='/login' element={<ForgotPassword />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />

          {/*Ruta protegidas*/}
          <Route path='/registroa' 
          element={<ProtectedRoute isAdmin={true}><Atable /></ProtectedRoute>} />
          
          <Route path='/registroc' 
          element={<ProtectedRoute isAdmin={true}><Ctable /></ProtectedRoute>} />
         
          <Route path='/admin/usuarios' 
          element={<ProtectedRoute isAdmin={true}><Usuarios /></ProtectedRoute>} />
          
          <Route path='/usuario/registro' 
          element= {<ProtectedRoute isAdmin={true}><Register/></ProtectedRoute>}/>
   

        <Route path='/updateProfile' 
          element= {<ProtectedRoute isAdmin={true}><UpdateProfile/></ProtectedRoute>}/>
        


        </Routes>




      </div>
    </BrowserRouter>
  );
}

export default App;