import React, { useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';

const Proyecto = ({ proyecto }) => {

  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;


  const seleccionarProyecto = id => {
    proyectoActual(id); // Fijar un proyecto actual
    //obtenerTareas(id); // Filtrar las tareas cuando se de click
}

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >{proyecto.nombre} </button>
    </li>
  );
}

export default Proyecto;