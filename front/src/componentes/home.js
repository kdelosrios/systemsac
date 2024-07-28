// Home.js
import React from 'react';
import { LineGraph } from './graphs/Linetac.jsx';
import { LineGraph1 } from './graphs/Linepac.jsx';
import { LineGraph2 } from './graphs/Lineaac.jsx';
import '../componentes/chartStyles.css'

export const Home = () => {
  return (
    <div>
          <div className="section section2">
          <p>Estadísticas de registro de actos y condiciones inseguras</p>
        </div>
      <div className="chart-container">
        <LineGraph />
        <LineGraph1 />
        <LineGraph2 />
      </div>
    </div>
  );
};

export default Home;