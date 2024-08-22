import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, clearErrors, loadUser } from "../../actions/userAction";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstans"

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { error, isUpdated, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      setNombre(user.nombre);
      setEmail(user.email);
      setRole(user.role);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Perfil actualizado correctamente");
      dispatch(loadUser());

      navigate("/admin/usuarios");

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, alert, error, isUpdated, user, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("email", email);
    formData.append("role", role);

    // Imprimir los datos del FormData
    const formDataObj = {};
    formData.forEach((value, key) => {
        formDataObj[key] = value;
    });
    console.log("Datos enviados:", formDataObj);

    dispatch(updateProfile(formData));
};

  return (
    <div className="section sectionac">
      <div className="form-wrapper">
        <h2 className="form-title">Actualización de usuarios</h2>

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
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading ? true : false}
          >
            Actualizar Perfil
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
