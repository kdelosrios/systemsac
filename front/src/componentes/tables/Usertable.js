import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import {getUser} from '../../actions/userAction';
import { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Usuarios = () => {
  const [searchId, setSearchId] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigate = useNavigate();
  

  const { loading, users, error } = useSelector(state => state.users);
  const alert = useAlert();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    dispatch(getUser());
    alert.success("Usuarios cargados correctamente");
  }, [dispatch, error, alert]);

  useEffect(() => {
    if (searchId) {
      setFilteredUsers(users.filter(user => user._id === searchId));
    } else {
      setFilteredUsers(users);
    }
  }, [searchId, users]);

  const handleSearchChange = (e) => {
    setSearchId(e.target.value);
  };

  const handleSearchClick = () => {
    
  };

  const handleEdit = () => {
    
    navigate('/updateProfile'); 
  };

  const handleDelete = (id) => {
    
    console.log('Eliminar usuario:', id);
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
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Rol</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <tr key={user._id || index}>
                <th scope="row">{index + 1}</th>
                <td>{user.nombre || 'N/A'}</td>
                <td>{user.email || 'N/A'}</td>
                <td>{user.role || 'N/A'}</td>
                <td>
                  <Button 
                    variant="outline-primary" 
                    className="me-2"
                    onClick={() => handleEdit(user._id)}
                    to="/"
                  >
                    <FaEdit />
                  </Button>
                  <Button 
                    variant="outline-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No hay datos disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;