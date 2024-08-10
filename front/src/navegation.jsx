import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faExclamationTriangle, faExclamationCircle, faUsers } from '@fortawesome/free-solid-svg-icons';


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
            <a href="total_actos"><FontAwesomeIcon icon={faExclamationTriangle} /> ACTOS INSEGUROS</a>
            <a href="total_condiciones"><FontAwesomeIcon icon={faExclamationCircle} /> CONDICIONES INSEGURAS</a>
            <a href="usuarios"><FontAwesomeIcon icon={faUsers} /> USUARIOS</a>
            
            <div className="col-12 col-md-3 mt-4 mt-md-0 text center"  class="login-container">
            <button className="btn" id="login-btn">Inice sesión</button>
           </div>

          </nav>
        </div>

        
      </div>
    );
  }
}

export default Navegation;