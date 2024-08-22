import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../../actions/userAction";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    role: "",
    password: "",
  });

  const navigate = useNavigate();
  const { nombre, email, role, password } = user;
  const alert = useAlert();
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector(state=> state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/usuario/registro");
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    
  }, [dispatch, isAuthenticated, error,alert, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Datos del usuario enviados:", {
      nombre,
      email,
      role,
      password,
    });

    const formData = new FormData();
    formData.set("nombre", nombre);
    formData.set("email", email);
    formData.set("role", role);
    formData.set("password", password);

    dispatch(register(formData));
  };
  
  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
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

        <form onSubmit={submitHandler} className="form-container">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="name"
              className="form-control"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={onChange}
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
              value={email}
              onChange={onChange}
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
              value={role}
              onChange={onChange}
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
              value={password}
              onChange={onChange}
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
