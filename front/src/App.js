import React from 'react';
import './App.css';
import Navegation from './navegation'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './componentes/home';
import ActsForm from './componentes/forms/actsForm';
import ConditionsForm from './componentes/forms/conditionsform.jsx';
import Atable from './componentes/tables/atable.jsx';
import Ctable from './componentes/tables/ctable.jsx';
import Usuarios from './componentes/tables/usertable.jsx';

function App() {
  return (
    <div className="App">
      <Navegation/>

      <BrowserRouter>
    <Routes>
    
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/registro_actos' element={<ActsForm/>}></Route>
      <Route path='/registro_condiciones' element={<ConditionsForm/>}></Route>
      <Route path='/total_actos' element={<Atable/>}></Route>
      <Route path='/total_condiciones' element={<Ctable/>}></Route>
      <Route path='/usuarios' element={<Usuarios/>}></Route>

   
      </Routes>
    </BrowserRouter>
    
          
      
      
    </div>
  );
}

export default App;
