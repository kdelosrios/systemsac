import React from 'react';
import './App.css';
import Navegation from './componentes/navegation.js'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './componentes/Home.js';
import ActsForm from './componentes/forms/ActsForm.js';
import ConditionsForm from './componentes/forms/Conditionsform.js';
import Atable from './componentes/tables/Atable.js';
import Ctable from './componentes/tables/Ctable.js';
import Usuarios from './componentes/tables/Usertable.js';

function App() {
  return (
    <div className="App">
      <Navegation/>
      <BrowserRouter>

      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/registro_actos' element={<ActsForm/>}></Route>
        <Route path='/registro_condiciones' element={<ConditionsForm/>}></Route>
        <Route path='/registroa' element={<Atable/>}></Route>
        <Route path='/registroc' element={<Ctable/>}></Route>
        <Route path='/usuarios' element={<Usuarios/>}></Route>
      </Routes>

      </BrowserRouter>
    
          
      
      
    </div>
  );
}

export default App;
