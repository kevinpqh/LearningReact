import React, { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({ createCita }) => {

  const [cita, updateCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const [error, updateError] = useState(false);

  const updateState = e => {
    updateCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  }

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const submitCita = e => {
    e.preventDefault();

    if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      updateError(true);
      return;
    }
    updateError(false);

    cita.id = uuid();

    createCita(cita);

    updateCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });

  }

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      { error ? <p className="alerta-error">Todos los campos son requeridos</p> : null}

      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de mascota"
          onChange={updateState}
          value={mascota} />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre de Dueño de la mascota"
          onChange={updateState}
          value={propietario} />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={updateState}
          value={fecha} />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={updateState}
          value={hora} />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={updateState}
          value={sintomas}></textarea>

        <button
          type="submit"
          className="button-primary u-full-width"
        >Agregar Cita</button>
      </form>

    </Fragment>
  );
}

Formulario.propTypes = {
  createCita: PropTypes.func.isRequired
}

export default Formulario;