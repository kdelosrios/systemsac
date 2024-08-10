import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Atable = () => {
  return (
    
    
      
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fecha</th>
            <th scope="col">Descripción</th>
            <th scope="col">Riesgo</th>
            <th scope="col">Características</th>
            <th scope="col">Área</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>2024-08-07</td>
            <td>Ejemplo de descripción de acto inseguro</td>
            <td>Físico</td>
            <td>No uso de EPP</td>
            <td>Producción</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>2024-08-07</td>
            <td>Otro ejemplo de descripción de acto inseguro</td>
            <td>Químico</td>
            <td>Manipulación incorrecta de equipos</td>
            <td>Mantenimiento</td>
          </tr>
          {/* Puedes agregar más filas según necesites */}
        </tbody>
      </table>
   
  );
};

export default Atable;