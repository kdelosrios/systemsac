import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faExclamationTriangle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./ChartStyles.css";
import { FaUser, FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../actions/userAction';

const Navegation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const { user, loading } = useSelector((state) => state.auth);

  const logouthHandler = () => {
    dispatch(logout()); 
    
    setTimeout(() => {
      navigate("/"); 
    }, 100); 
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div className="logo-container">
        <div className="logo-section">
          <Link to="/" className="logo">
            <img src="./system.png" alt="Logo" />
          </Link>
        </div>
      </div>

      <div className="section section1">
        <nav className="navbar">
          <Link to="/home">
            <FontAwesomeIcon icon={faHome} /> HOME
          </Link>
          <Link to="/registroa">
            <FontAwesomeIcon icon={faExclamationTriangle} /> ACTOS INSEGUROS
          </Link>
          <Link to="/registroc">
            <FontAwesomeIcon icon={faExclamationCircle} /> CONDICIONES INSEGURAS
          </Link>

          <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
            <div className="ml-4 dropdown d-inline">
              <Link
                to="#!"
                className="btn dropdown-toggle text-white mr-2"
                id="dropDownMenu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FaUsers className="mr-2" />
                USUARIOS
              </Link>

              <div className="dropdown-menu" aria-labelledby="dropDownMenu">
                <Link className="dropdown-item text-black" to="/usuario/registro">
                  Crear usuario
                </Link>
                <Link className="dropdown-item text-black" to="/admin/usuarios">
                  Ver usuario
                </Link>
              </div>
            </div>
          </div>

          {user ? (
            <div className="col-12 col-md-3 mt-6 mt-md-0 text-center">
              <div className="ml-4 dropdown d-inline">
                <Link
                  to="/home"
                  className="btn dropdown-toggle text-white mr-2"
                  id="dropDownMenu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FaUser className="mr-2" />
                  <span>{user.nombre}</span>
                </Link>

                <div className="dropdown-menu" aria-labelledby="dropDownMenu">

                  <Link className="dropdown-item text-black" to="/">
                    Iniciar sesión
                  </Link>
                  <Link className="dropdown-item text-black" to="/forgotPassword">
                    Cambiar contraseña
                  </Link>
                  <button className="dropdown-item text-black" onClick={logouthHandler}>
                    Cerrar sesión
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/" className="btn ml-4" id="login_btn">
              Login
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navegation;