import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getConditions } from '../../actions/conditionActions';

const Ctable = () => {
  const [searchId, setSearchId] = useState('');
  const [filteredConditions, setFilteredConditions] = useState([]);
  
  const dispatch = useDispatch();
  const { loading, conditions = [], error } = useSelector(state => state.conditions);

  useEffect(() => {
    dispatch(getConditions());
  }, [dispatch]);

  useEffect(() => {
    if (conditions && conditions.length > 0) {
      const filtered = searchId 
        ? conditions.filter(condition => condition._id === searchId)
        : conditions;
      setFilteredConditions(filtered);
    }
  }, [searchId, conditions]);

  const handleSearchChange = (e) => {
    setSearchId(e.target.value);
  };

  const handleSearchClick = () => {
    if (conditions && conditions.length > 0) {
      const filtered = searchId 
        ? conditions.filter(condition => condition._id === searchId)
        : conditions;
      setFilteredConditions(filtered);
    }
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="row mt-5 mb-4 justify-content-end">
        <div className="col-auto">
          <input
            type="text"
            placeholder="Buscar por ID"
            value={searchId}
            onChange={handleSearchChange}
            className="form-control"
          />
        </div>

        <div className="col-auto">
          <button
            onClick={handleSearchClick}
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
                <td>{condition._id}</td>
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