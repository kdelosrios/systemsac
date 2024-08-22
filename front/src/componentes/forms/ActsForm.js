import React, { useState } from "react";
import "../forms/FormsStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { createAct } from "../../actions/actActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Actform = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fecha: "",
    descripcion: "",
    riesgo: "",
    caracteristicas: "",
    area: "",
  });

  const [alert, setAlert] = useState({ type: "", message: "", icon: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fecha, descripcion, riesgo, caracteristicas, area } = formData;
    if (!fecha || !descripcion || !riesgo || !caracteristicas || !area) {
      setAlert({
        type: "danger",
        message: "Todos los campos son obligatorios.",
        icon: <FontAwesomeIcon icon={faTimesCircle} />,
      });
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    dispatch(createAct(formData, config))
      .then(() => {
        setAlert({
          type: "success",
          message: "Acto inseguro creado exitosamente",
          icon: <FontAwesomeIcon icon={faCheckCircle} />,
        });
        setFormData({
          fecha: "",
          descripcion: "",
          riesgo: "",
          caracteristicas: "",
          area: "",
        });
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      })
      .catch((error) => {
        setAlert({
          type: "danger",
          message: "Error al crear el registro",
          icon: <FontAwesomeIcon icon={faTimesCircle} />,
        });
        console.error("Error al crear el registro:", error);
      });
  };

  return (
    <div className="section sectionac">
      <div className="form-wrapper">
        <h2 className="form-title">Registro de actos inseguros</h2>

        {alert.message && (
          <div
            className={`alert alert-${alert.type} d-flex align-items-center`}
            role="alert"
          >
            {alert.icon}
            <div className="ms-2">{alert.message}</div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="form-container">
          <div className="mb-3">
            <label htmlFor="exampleDate" className="form-label">
              Fecha
            </label>
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
            <label htmlFor="exampleDescription" className="form-label">
              Descripción
            </label>
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
            <option value="Biomecánico">Biomecánico</option>
            <option value="Psicosocial">Psicosocial</option>
            <option value="Condiciones de Seguridad">
              Condiciones de Seguridad
            </option>
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
            <option value="No uso de EPP">No uso de EPP</option>
            <option value="Ingreso a zonas restringidas">
              Ingreso a zonas restringidas
            </option>
            <option value="Manipulación incorrecta de equipos">
              Manipulación incorrecta de equipos
            </option>
            <option value="Ignorar procedimientos de seguridad">
              Ignorar procedimientos de seguridad
            </option>
            <option value="Postura y movimientos incorrectos">
              Postura y movimientos incorrectos
            </option>
            <option value="Falta de atención o concentración">
              Falta de atención o concentración
            </option>
            <option value="Uso inadecuado de herramientas">
              Uso inadecuado de herramientas
            </option>
            <option value="Uso inseguro de sustancias o materiales">
              Uso inseguro de sustancias o materiales
            </option>
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

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Actform;
