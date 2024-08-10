import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ctable = () => {
  return (
    <div className="container mt-5">
      
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Fecha</th>
            <th scope="col">Descripción</th>
            <th scope="col">Imagen</th>
            <th scope="col">Riesgo</th>
            <th scope="col">Características</th>
            <th scope="col">Área</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>2024-08-07</td>
            <td>Ejemplo de descripción de condición insegura</td>
            <td>imagen-ejemplo.jpg</td>
            <td>Eléctrico</td>
            <td>Iluminación deficiente</td>
            <td>CEDI</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>2024-08-07</td>
            <td>Otro ejemplo de descripción de condición insegura</td>
            <td>imagen-ejemplo2.jpg</td>
            <td>Biológico</td>
            <td>Falta de señalización de peligro</td>
            <td>Materias primas</td>
          </tr>
          {/* Puedes agregar más filas según necesites */}
        </tbody>
      </table>
    </div>
  );
};

export default Ctable;