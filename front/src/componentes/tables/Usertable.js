import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Usuarios = () => {
  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Rol</th>
            <th scope="col">Acciones</th> {/* Columna para los íconos */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Usuario1</td>
            <td>usuario1@example.com</td>
            <td>Administrador</td>
            <td>
              <Button variant="outline-primary" className="me-2">
                <FaEdit /> {/* Ícono de editar */}
              </Button>
              <Button variant="outline-danger">
                <FaTrash /> {/* Ícono de eliminar */}
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Usuario2</td>
            <td>usuario2@example.com</td>
            <td>Usuario Regular</td>
            <td>
              <Button variant="outline-primary" className="me-2">
                <FaEdit /> {/* Ícono de editar */}
              </Button>
              <Button variant="outline-danger">
                <FaTrash /> {/* Ícono de eliminar */}
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;