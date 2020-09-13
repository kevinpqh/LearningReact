import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types'

const Formulario = ({setGasto,setCrearGasto}) => {

  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);


  const addGasto = e => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
      setError(true);
      return;
    }
    setError(false);

    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    };
    setGasto(gasto);
    setCrearGasto(true);

    setNombre('');
    setCantidad(0);


  }

  return (
    <form
      onSubmit={addGasto}>
      <h2>Tus gastos</h2>
      {
        error ? <Error mensaje="todos los datos son requeridos" /> : null
      }
      <div className="campo">
        <label>NOmbre de Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={e => setNombre(e.target.value)} />
      </div>

      <div className="campo">
        <label>Cantidad de Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={e => setCantidad(parseInt(e.target.value, 10))} />
      </div>


      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto" />
    </form>
  );
}
Formulario.prototypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired
}
export default Formulario;