import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faExclamationTriangle, faExclamationCircle, faUsers, faUser } from '@fortawesome/free-solid-svg-icons';


class Navegation extends React.Component{

  render() {
    return (
      <div>
        <div className="logo-container">
          <div className="logo-section">
            <a href="home" className="logo">
              <img src='./system.png' alt="Logo" />
            </a>
          </div>
        </div>

        <div className="section section1">
          <nav className="navbar">
            <a href="home"><FontAwesomeIcon icon={faHome} /> HOME</a>
            <a href="registro_actos"><FontAwesomeIcon icon={faExclamationTriangle} /> ACTOS INSEGUROS</a>
            <a href="registro_condiciones"><FontAwesomeIcon icon={faExclamationCircle} /> CONDICIONES INSEGURAS</a>
            <a href="usuarios"><FontAwesomeIcon icon={faUsers} /> USUARIOS</a>
            <a href="nombreusuario"><FontAwesomeIcon icon={faUser} /> Nombre Usuario</a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navegation;