import React from 'react';
import './App.css';
import Navegation from './navegation'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './componentes/home';

function App() {
  return (
    <div className="App">
      <Navegation/>

      <BrowserRouter>
    <Routes>
    
      <Route path='/home' element={<Home/>}></Route>

   
      </Routes>
    </BrowserRouter>
    
          
      
      
    </div>
  );
}

export default App;
