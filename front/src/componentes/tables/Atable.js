import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getActs } from '../../actions/actActions';
import { useEffect } from 'react';
import { useAlert } from 'react-alert';

const Atable = () => {
  
  
  const { loading, acts, error } = useSelector(state => state.acts);
  const alert= useAlert();
  const dispatch = useDispatch();
  
  useEffect(() => {
      if(error){
        return alert.error(error)
      }
      dispatch(getActs());
      alert.success("OK")
  }, [alert, dispatch])

  console.log('Loading:', loading);
  console.log('Acts:', acts);
  console.log('Error:', error);


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
        
        {acts && acts.length > 0 ? (
          acts.map((act, index) => (
            <tr key={act._id || index}>
              <th scope="row">{index + 1}</th>
              <td>{act.fecha || 'N/A'}</td>
              <td>{act.descripcion || 'N/A'}</td>
              <td>{act.riesgo || 'N/A'}</td>
              <td>{act.caracteristicas || 'N/A'}</td>
              <td>{act.area || 'N/A'}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">No hay datos disponibles</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Atable;