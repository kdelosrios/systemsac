import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getConditions } from '../../actions/conditionActions';

const Ctable = () => {

  const dispatch = useDispatch();
  const { loading, conditions, error } = useSelector(state => state.conditions); // Desestructuración correcta

  useEffect(() => {
    dispatch(getConditions());
  }, [dispatch]);

  console.log('Loading:', loading);
  console.log('Conditions:', conditions);
  console.log('Error:', error);

  return (
    <div className="container mt-5">
      
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

          {conditions.length > 0 ? (
            conditions.map((condition, index) => ( 
              <tr key={condition._id || index}>
                <th scope="row">{index + 1}</th>
                <td>{condition.fecha || 'N/A'}</td>
                <td>{condition.descripcion || 'N/A'}</td>
                <td>{condition.riesgo || 'N/A'}</td>
                <td>{condition.caracteristicas || 'N/A'}</td>
                <td>{condition.area || 'N/A'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No hay datos disponibles</td> 
            </tr>
          )}
    
        </tbody>
      </table>
    </div>
  );
};

export default Ctable;