import React, { useState } from 'react';
import '../forms/FormsStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { createCondition } from '../../actions/conditionActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

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

  const [alert, setAlert] = useState({ type: '', message: '', icon: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos obligatorios
    const { fecha, descripcion, riesgo, caracteristicas, area } = formData;
    if (!fecha || !descripcion || !riesgo || !caracteristicas || !area) {
      setAlert({
        type: 'danger',
        message: 'Todos los campos son obligatorios.',
        icon: <FontAwesomeIcon icon={faTimesCircle} />
      });
      return;
    }

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
              className="form-control"
              id="exampleDate"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleDescription" className="form-label">Descripción</label>
            <textarea
              className="form-control"
              id="exampleDescription"
              rows="1"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <select
            name="riesgo"
            className="form-select mb-3"
            aria-label="Default select riesgo"
            onChange={handleChange}
            value={formData.riesgo}
            required
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

          <select
            name="caracteristicas"
            className="form-select mb-3"
            aria-label="Default select características"
            onChange={handleChange}
            value={formData.caracteristicas}
            required
          >
            <option value="">Seleccionar característica</option>
            <option value="Equipos sin guardas">Equipos sin guardas</option>
            <option value="Áreas peligrosas sin restricción">Áreas peligrosas sin restricción</option>
            <option value="Iluminación inadecuada">Iluminación inadecuada</option>
            <option value="Señalización deficiente">Señalización deficiente</option>
            <option value="Condiciones ambientales peligrosas">Condiciones ambientales peligrosas</option>
            <option value="Espacios confinados sin control">Espacios confinados sin control</option>
          </select>

          <select
            name="area"
            className="form-select mb-3"
            aria-label="Default select área"
            onChange={handleChange}
            value={formData.area}
            required
          >
            <option value="">Seleccionar área</option>
            <option value="Producción">Producción</option>
            <option value="Mantenimiento">Mantenimiento</option>
            <option value="CEDI">CEDI</option>
            <option value="Materias primas">Materias primas</option>
            <option value="Gestión Humana">Gestión Humana</option>
          </select>

          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Conditionsform;