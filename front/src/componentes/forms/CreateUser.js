import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from 'react-bootstrap';

const UserForm = () => {
    return (
        <Container className="mt-5">
            <div className="d-flex justify-content-center">
                <Form style={{ maxWidth: '400px', width: '100%' }}>
                    <h2 className="text-center mb-4">Crear Usuario</h2>
                    
                    <Form.Group controlId="formName">
                        <Form.Label >Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre"
                            name="name"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ingrese el correo electrónico"
                            name="email"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formRole">
                        <Form.Label>Rol</Form.Label>
                        <Form.Control
                            as="select"
                            name="role"
                            required
                        >
                            <option value="" disabled>Seleccione el rol</option>
                            <option value="admin">Administrador</option>
                            <option value="user">Usuario</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Ingrese la contraseña"
                            name="password"
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3">
                        Crear Usuario
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default UserForm;