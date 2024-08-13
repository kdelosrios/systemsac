import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getConditions } from '../../actions/conditionActions';

const Ctable = () => {
  const [searchId, setSearchId] = useState(''); // Estado para manejar el ID de búsqueda
  const [filteredConditions, setFilteredConditions] = useState([]); // Estado para manejar las condiciones filtradas

  const dispatch = useDispatch();
  const { loading, conditions, error } = useSelector(state => state.conditions);

  useEffect(() => {
    dispatch(getConditions());
  }, [dispatch]);

  useEffect(() => {
    // Filtrar las condiciones según el ID de búsqueda
    if (searchId) {
      setFilteredConditions(conditions.filter(condition => condition._id === searchId));
    } else {
      setFilteredConditions(conditions);
    }
  }, [searchId, conditions]);

  const handleSearchChange = (e) => {
    setSearchId(e.target.value); // Actualizar el estado con el valor del input
  };

  const handleSearchClick = () => {
    // Filtrar las condiciones cuando se hace clic en el botón Buscar
    if (searchId) {
      setFilteredConditions(conditions.filter(condition => condition._id === searchId));
    } else {
      setFilteredConditions(conditions);
    }
  };

  console.log('Loading:', loading);
  console.log('Conditions:', conditions);
  console.log('Filtered Conditions:', filteredConditions);
  console.log('Error:', error);

  return (
    <div>
      <div className="row mt-5 mb-4 justify-content-end">
        <div className="col-auto">
          <input
            type="text"
            placeholder="Buscar por ID"
            value={searchId} // Vincula el input al estado
            onChange={handleSearchChange} // Maneja el cambio en el input
            className="form-control"
          />
        </div>

        <div className="col-auto">
          <button
            onClick={handleSearchClick} // Maneja el clic en el botón
            className="btn btn-primary btn-sm"
            style={{ backgroundColor: '#2c3152', color: '#ffffff', borderColor: '#2c3152' }}
          >
            Buscar
          </button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Fecha</th>
            <th scope="col">Descripción</th>
            <th scope="col">Riesgo</th>
            <th scope="col">Características</th>
            <th scope="col">Área</th>
          </tr>
        </thead>
        <tbody>
          {filteredConditions.length > 0 ? (
            filteredConditions.map((condition, index) => (
              <tr key={condition._id || index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <div className="tooltip">{condition._id}</div>
                  {condition._id}
                </td>
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