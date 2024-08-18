import React from 'react';
import './App.css';
import Navegation from './componentes/navegation.js'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './componentes/Home.js';
import ActsForm from './componentes/forms/ActsForm.js';
import Conditionsform from './componentes/forms/Conditionsform.js';
import Atable from './componentes/tables/Atable.js';
import Ctable from './componentes/tables/Ctable.js';
import Usuarios from './componentes/tables/Usertable.js';
import Login from './componentes/forms/Login.js';
import UserForm from './componentes/forms/CreateUser.js';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navegation />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          
          <Route path='/newregistroa' element={<ActsForm />} />
          <Route path='/newregistroc' element={<Conditionsform />} />
          <Route path='/registroa' element={<Atable />} />
          <Route path='/registroc' element={<Ctable />} />

          <Route path='/usuarios' element={<Usuarios />} />
          <Route path='/newusuario' element={<UserForm />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;