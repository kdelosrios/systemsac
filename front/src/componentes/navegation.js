import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faExclamationTriangle,
  faExclamationCircle,
  
} from "@fortawesome/free-solid-svg-icons";
import "./ChartStyles.css";
import { FaUser,FaUsers} from 'react-icons/fa';

class Navegation extends React.Component {
  render() {
    return (
      <div>
        <div className="logo-container">
          <div className="logo-section">
            <a href="home" className="logo">
              <img src="./system.png" alt="Logo" />
            </a>
          </div>
        </div>

        <div className="section section1">
          <nav className="navbar">
            <a href="home">
              <FontAwesomeIcon icon={faHome} /> HOME
            </a>
            <a href="registroa">
              <FontAwesomeIcon icon={faExclamationTriangle} /> ACTOS INSEGUROS
            </a>
            <a href="registroc">
              <FontAwesomeIcon icon={faExclamationCircle} /> CONDICIONES
              INSEGURAS
            </a>

            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
              <div className="ml-4 dropdown d-inline">
                <Link
                  to="#!"
                  className="btn dropdown-toggle text-white mr-2"
                  type="button"
                  id="dropDownMenu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FaUsers className="mr-2" />
                  USUARIOS
                </Link>

                <div className="dropdown-menu" aria-labelledby="dropDownMenu">
                  <Link className="dropdown-item text-black" to="/newusuario">
                    Crear usuario
                  </Link>
                  <Link className="dropdown-item text-black" to="/usuarios">
                    Ver usuario
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
              <div className="ml-4 dropdown d-inline">
                <Link
                  to="#!"
                  className="btn dropdown-toggle text-white mr-2"
                  type="button"
                  id="dropDownMenu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FaUser className="mr-2" />
                  *nombre de usuario*
                </Link>

                <div className="dropdown-menu" aria-labelledby="dropDownMenu">
                  <Link className="dropdown-item text-black" to="/">
                    Iniciar sesión
                  </Link>
                  <Link className="dropdown-item text-black" to="/">
                    Cerrar sesión
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navegation;
