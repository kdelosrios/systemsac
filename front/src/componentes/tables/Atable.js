import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getActs } from '../../actions/actActions';
import { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';

const Atable = () => {
  const [searchId, setSearchId] = useState('');
  const [filteredActs, setFilteredActs] = useState([]);

  const { loading, acts, error } = useSelector(state => state.acts);
  const alert = useAlert();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getActs());
    alert.success("OK");
  }, [alert, dispatch]);

  useEffect(() => {

    if (searchId) {
      setFilteredActs(acts.filter(act => act._id === searchId));
    } else {
      setFilteredActs(acts);
    }
  }, [searchId, acts]);

  const handleSearchChange = (e) => {
    setSearchId(e.target.value);
  };

  const handleSearchClick = () => {
    
  };

  console.log('Loading:', loading);
  console.log('Acts:', acts);
  console.log('Filtered Acts:', filteredActs);
  console.log('Error:', error);

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
          {filteredActs && filteredActs.length > 0 ? (
            filteredActs.map((act, index) => (
              <tr key={act._id || index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <div className="tooltip">{act._id}</div>
                  {act._id}
                </td>
                <td>{act.fecha || 'N/A'}</td>
                <td>{act.descripcion || 'N/A'}</td>
                <td>{act.riesgo || 'N/A'}</td>
                <td>{act.caracteristicas || 'N/A'}</td>
                <td>{act.area || 'N/A'}</td>
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

export default Atable;