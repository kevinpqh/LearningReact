import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {

  const [cantidad, setCantidad] = useState(0);

  const [error, setError] = useState(false);

  const defPresupuesto = e => {
    setCantidad(parseInt(e.target.value, 10));
  }

  const addPresupuesto = e => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarPregunta(false)
  }

  return (
    <Fragment>
      <h2> Coloca tu Presupuesto</h2>
      { error ? <Error
        mensaje="El Presupuesto es Incorrecto" /> : null}
      <form onSubmit={addPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="pon cuanto tienes"
          onChange={defPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
}

Pregunta.prototypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setMostrarPregunta: PropTypes.func.isRequired
}

export default Pregunta;