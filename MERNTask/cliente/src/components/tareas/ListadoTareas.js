import React, { Fragment, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import Tarea from './Tarea';

const ListadoTareas = () => {

  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  if (!proyecto) return <h2>Selecciona un proyecto</h2>;
  const [proyectoActual] = proyecto;


  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id)
  }
  const tareasproyecto = [{
    nombre: 'sasa', estado: false
  }];

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre} </h2>

      <ul className="listado-tareas">
        {tareasproyecto.length === 0
          ? (<li className="tarea"><p>No hay tareas</p></li>)
          :
          // <TransitionGroup>
          //</TransitionGroup>{ 
          tareasproyecto.map(tarea => (
            // <CSSTransition
            //   key={tarea.id}
            //   timeout={200}
            //   classNames="tarea"
            // >
            <Tarea
              tarea={tarea}
            />
            // </CSSTransition>
          ))
          //}
          // </TransitionGroup>
        }
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}
      >Eliminar Proyecto &times;</button>
    </Fragment>
  );
}

export default ListadoTareas;