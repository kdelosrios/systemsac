import React, { useState } from 'react';
import '../forms/FormsStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCondition } from '../../actions/conditionActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Conditionsform = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fecha: '',
    descripcion: '',
    riesgo: '',
    caracteristicas: '',
    area: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [alert, setAlert] = useState({ type: '', message: '', icon: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
      [name]: value 
    });
    setFormErrors({
      ...formErrors,
      [name]: value ? '' : `Por favor, ingrese el campo ${name}`
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fecha) errors.fecha = 'Por favor, ingrese el campo fecha';
    if (!formData.descripcion) errors.descripcion = 'Por favor, ingrese el campo descripción';
    if (!formData.riesgo) errors.riesgo = 'Por favor, seleccione un riesgo';
    if (!formData.caracteristicas) errors.caracteristicas = 'Por favor, seleccione una característica';
    if (!formData.area) errors.area = 'Por favor, seleccione un área';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(createCondition(formData))
        .then(() => {
          setAlert({
            type: 'success',
            message: 'Condición insegura creada exitosamente',
            icon: <FontAwesomeIcon icon={faCheckCircle} />
          });
          setFormData({
            fecha: '',
            descripcion: '',
            riesgo: '',
            caracteristicas: '',
            area: ''
          });
          setTimeout(() => {
            navigate('/home'); 
          }, 1000);
        })
        .catch((error) => {
          setAlert({
            type: 'danger',
            message: 'Error al crear el registro',
            icon: <FontAwesomeIcon icon={faTimesCircle} />
          });
          console.error('Error al crear el registro:', error);
        });
    } else {
      setAlert({
        type: 'danger',
        message: 'Por favor, complete todos los campos obligatorios.',
        icon: <FontAwesomeIcon icon={faTimesCircle} />
      });
    }
  };

  return (
    <div className="section sectionac">
      <div className="form-wrapper">
        <h2 className="form-title">Registro de Condiciones Inseguras</h2>
        
        {alert.message && (
          <div className={`alert alert-${alert.type} d-flex align-items-center`} role="alert">
            {alert.icon}
            <div className="ms-2">
              {alert.message}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="form-container">
          <div className="mb-3">
            <label htmlFor="exampleDate" className="form-label">Fecha</label>
            <input
              type="date"
              className={`form-control ${formErrors.fecha ? 'is-invalid' : ''}`}
              id="exampleDate"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
            />
            {formErrors.fecha && <div className="invalid-feedback">{formErrors.fecha}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleDescription" className="form-label">Descripción</label>
            <textarea
              className={`form-control ${formErrors.descripcion ? 'is-invalid' : ''}`}
              id="exampleDescription"
              rows="1"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
            ></textarea>
            {formErrors.descripcion && <div className="invalid-feedback">{formErrors.descripcion}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleRiesgo" className="form-label">Riesgo</label>
            <select
              name="riesgo"
              className={`form-select ${formErrors.riesgo ? 'is-invalid' : ''}`}
              aria-label="Default select riesgo"
              onChange={handleChange}
              value={formData.riesgo}
            >
              <option value="">Seleccionar riesgo</option>
              <option value="Físico">Físico</option>
              <option value="Químico">Químico</option>
              <option value="Biológico">Biológico</option>
              <option value="Psicosocial">Psicosocial</option>
              <option value="Condiciones de Seguridad">Condiciones de Seguridad</option>
              <option value="Eléctrico">Eléctrico</option>
              <option value="Mecánico">Mecánico</option>
            </select>
            {formErrors.riesgo && <div className="invalid-feedback">{formErrors.riesgo}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleCaracteristicas" className="form-label">Características</label>
            <select
              name="caracteristicas"
              className={`form-select ${formErrors.caracteristicas ? 'is-invalid' : ''}`}
              aria-label="Default select características"
              onChange={handleChange}
              value={formData.caracteristicas}
            >
              <option value="">Seleccionar característica</option>
              <option value="Equipos sin guardas">Equipos sin guardas</option>
              <option value="Áreas peligrosas sin restricción">Áreas peligrosas sin restricción</option>
              <option value="Iluminación inadecuada">Iluminación inadecuada</option>
              <option value="Señalización deficiente">Señalización deficiente</option>
              <option value="Condiciones ambientales peligrosas">Condiciones ambientales peligrosas</option>
              <option value="Espacios confinados sin control">Espacios confinados sin control</option>
            </select>
            {formErrors.caracteristicas && <div className="invalid-feedback">{formErrors.caracteristicas}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleArea" className="form-label">Área</label>
            <select
              name="area"
              className={`form-select ${formErrors.area ? 'is-invalid' : ''}`}
              aria-label="Default select área"
              onChange={handleChange}
              value={formData.area}
            >
              <option value="">Seleccionar área</option>
              <option value="Producción">Producción</option>
              <option value="Mantenimiento">Mantenimiento</option>
              <option value="CEDI">CEDI</option>
              <option value="Materias primas">Materias primas</option>
              <option value="Gestión Humana">Gestión Humana</option>
            </select>
            {formErrors.area && <div className="invalid-feedback">{formErrors.area}</div>}
          </div>

          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Conditionsform;