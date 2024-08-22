import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { login, clearErrors } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Alert } from 'react-bootstrap'; 

const Login = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
    if (error) {
      setShowAlert(true); 
      dispatch(clearErrors()); 
    }
  }, [dispatch, isAuthenticated, error, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password)); 
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div>
                  <h1
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "18px",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    Iniciar sesión
                  </h1>
                </div>
                <div className="mb-3">
                  <label htmlFor="email_field" className="form-label">
                    Usuario
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email_field"
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password_field" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password_field"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <p className="text-center">
                  <a
                    href="/forgotPassword"
                    className="text-decoration-none text-primary"
                  >
                    ¿Olvidó su contraseña?
                  </a>
                </p>

                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">
                    Iniciar sesión
                  </button>
                </div>
              </form>

              {/* Mostrar alerta */}
              {showAlert && (
                <Alert variant="danger" className="mt-3" onClose={() => setShowAlert(false)} dismissible>
                  <strong>Error:</strong> Usuario o contraseña incorrectos, intente de nuevo.
                </Alert>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;