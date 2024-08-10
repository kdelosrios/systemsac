import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './formsStyles.css'; 

const ConditionsForm = () => {
    return (
        <div className="section sectionac">
            <div className="form-wrapper">
                <h2 className="form-title">Registro de condiciones inseguras</h2>
                <form action="/cregistered" method="post" className="form-container">
                    <div className="mb-3">
                        <label htmlFor="exampleDate" className="form-label">Fecha</label>
                        <input type="date" className="form-control" id="exampleDate" name="fecha" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleDescription" className="form-label">Descripción</label>
                        <textarea className="form-control" id="exampleDescription" rows="3" name="descripcion"></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleImage" className="form-label">Imagen</label>
                        <input type="file" className="form-control" id="exampleImage" name="imagen" />
                    </div>

                    <select name="riesgos" className="form-select mb-3" aria-label="Default select riesgo">
                        <option value="" disabled selected>Riesgo</option>
                        <option value="1">Físico</option>
                        <option value="2">Químico</option>
                        <option value="3">Biológico</option>
                        <option value="4">Psicosocial</option>
                        <option value="5">Condiciones de Seguridad</option>
                        <option value="6">Eléctrico</option>
                        <option value="7">Mecánico</option>
                    </select>

                    <select name="caracteristicas" className="form-select mb-3" aria-label="Default select caracteristicas">
                        <option value="" disabled selected>Características</option>
                        <option value="1">Equipos sin guardas</option>
                        <option value="2">Áreas peligrosas sin restricción</option>
                        <option value="3">Iluminación deficiente</option>
                        <option value="4">Ventilación inadecuada</option>
                        <option value="5">Pisos resbaladizos o en mal estado</option>
                        <option value="6">Falta de señalización de peligro</option>
                        <option value="7">Almacenamiento inadecuado de sustancias o materiales</option>
                        <option value="8">Falta de mantenimiento de equipos</option>
                        <option value="9">Ruido Excesivo</option>
                    </select>

                    <select name="area" className="form-select mb-3" aria-label="Default select area">
                        <option value="" disabled selected>Seleccione el área</option>
                        <option value="1">Producción</option>
                        <option value="2">Mantenimiento</option>
                        <option value="3">CEDI</option>
                        <option value="4">Materias primas</option>
                        <option value="5">Gestión Humana</option>
                    </select>

                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default ConditionsForm;