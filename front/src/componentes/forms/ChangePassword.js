import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const changePassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const validateForm = () => {
        if (!email) {
            setError('El correo electrónico es obligatorio');
            return false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('El correo electrónico no es válido');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Aquí puedes manejar el envío del correo electrónico al servidor
            console.log(email);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                            <h2 className="title-text">¿No puedes iniciar sesión? <br />
                            Para restablecer la clave, ingresa tu correo electrónico</h2>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={handleInputChange}
                                    />
                                    {error && <div className="text-danger">{error}</div>}
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary">Enviar correo</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;