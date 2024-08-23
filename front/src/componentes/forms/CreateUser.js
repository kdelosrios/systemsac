import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { register } from "../../actions/userAction";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    role: "",
    password: "",
  });

  const [alert, setAlert] = useState({ type: "", message: "", icon: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, email, role, password } = formData;

    if (!nombre || !email || !role || !password) {
      setAlert({
        type: "danger",
        message: "Todos los campos son obligatorios",
        icon: <FontAwesomeIcon icon={faTimesCircle} />,
      });
      return;
    }

    // Configuración de la cabecera
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Crear el objeto de datos del usuario
    const userData = { nombre, email, role, password };

    // Dispatch de la acción para registrar el usuario
    dispatch(register(userData, config))
      .then(() => {
        setAlert({
          type: "success",
          message: "Usuario creado exitosamente",
          icon: <FontAwesomeIcon icon={faCheckCircle} />,
        });
        setFormData({
          nombre: "",
          email: "",
          role: "",
          password: "",
        });
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      })
      .catch((error) => {
        setAlert({
          type: "danger",
          message: "Error al crear el usuario",
          icon: <FontAwesomeIcon icon={faTimesCircle} />,
        });
        console.error("Error al crear el usuario", error);
      });
  };

  return (
    <div className="section sectionac">
      <div className="form-wrapper">
        <h2 className="form-title">Registro de usuarios</h2>

        {alert.message && (
          <div
            className={`alert alert-${alert.type} d-flex align-items-center`}
            role="alert"
          >
            {alert.icon}
            <div className="ms-2">{alert.message}</div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="form-container">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email_field"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              Rol
            </label>
            <input
              type="text"
              className="form-control"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;