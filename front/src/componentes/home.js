// Home.js
import React from 'react';
import { LineGraph } from './graphs/Linetac.jsx';
import { LineGraph1 } from './graphs/Linepac.jsx';
import { LineGraph2 } from './graphs/Lineaac.jsx';
import {Charta} from './graphs/Charta.jsx';
import {Chartc} from './graphs/Chartc.jsx'
import '../componentes/ChartStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle,faExclamationCircle } from '@fortawesome/free-solid-svg-icons';



export const Home = () => {
  return (
    <div>

          <div className="section section2">
          <nav className="navbar">

          
          <a href="registro_actos" className="nav-link">
          <div className="nav-item1">
            <FontAwesomeIcon icon={faExclamationTriangle} className="icon-large" />
            <span className="nav-text">REGISTRO ACTOS INSEGUROS</span>
            </div>
          </a>

          <a href="registro_condiciones" className="nav-link">
          <div className="nav-item2">
            <FontAwesomeIcon icon={faExclamationCircle} className="icon-large" />
            <span className="nav-text">REGISTRO CONDICIONES INSEGURAS</span>
              </div>
            </a>
          </nav>
        </div>
      <div className="chart-container">
        <LineGraph />
        <LineGraph1 />
        <LineGraph2 />
        <Charta />
        < Chartc/>
       
        
      </div>
    </div>
  );
};

export default Home;