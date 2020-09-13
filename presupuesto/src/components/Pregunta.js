import React, { Fragment, useState } from 'react';
import Error from './Error'

const Pregunta = () => {

  const [ cantidad, setCantidad] = useState(0);

  const [ error, setError] = useState(false);

  const defPresupuesto = e => {
    setCantidad(parseInt(e.target.value,10));
  }

  const addPresupuesto = e => {
    e.preventDefault();

    if(cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setError(false)
  }

  return (
    <Fragment>
      <h2> Coloca tu Presupuesto</h2>
      { error ? <Error
                  mensaje="El Presupuesto es Incorrecto"/> : null}
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

export default Pregunta;