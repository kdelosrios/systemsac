import React from 'react';
import './App.css';
import Navegation from './componentes/navegation.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './componentes/Home.js';
import ActsForm from './componentes/forms/ActsForm.jsx';
import ConditionsForm from './componentes/forms/Conditionsform.jsx';
import Atable from './componentes/tables/Atable.jsx';
import Ctable from './componentes/tables/Ctable.jsx';
import Usuarios from './componentes/tables/Usertable.jsx';

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
        <Route path='/total_condiciones' element={<Ctable/>}></Route>
        <Route path='/usuarios' element={<Usuarios/>}></Route>
      </Routes>

      </BrowserRouter>
    
          
      
      
    </div>
  );
}

export default App;
