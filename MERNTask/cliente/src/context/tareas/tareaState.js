import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { v4 as uuid } from 'uuid';

import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA
} from '../../types';

const TareaState = props => {

  const initialState = {
    tareasproyecto: [{
      id: 1, nombre: 'sasa', estado: false, proyectoId: 1
    }],
    errortarea: false,
    tareaseleccionada: null
  }

  const [state, dispatch] = useReducer(TareaReducer, initialState);


  const obtenerTareas = proyectoId => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId
    })
  }
  const agregarTarea = tarea => {
    console.log(tarea);
    tarea.id = uuid();
    // try {
    //   const resultado = await clienteAxios.post('/api/tareas', tarea);
    //   console.log(resultado);
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea
    })
    // } catch (error) {
    //   console.log(error);
    // }
  }
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA
    })
  }

  //const eliminarTarea = async (id, proyecto) => {
  const eliminarTarea = id => {
    // try {
    //     await clienteAxios.delete(`/api/tareas/${id}`, { params: { proyecto }});
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id
    })
    // } catch (error) {
    //     console.log(error)
    // }
  }

  const actualizarTarea = tarea => {

    // try {
    //   const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea);

    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea
    })
    // } catch (error) {
    //   console.log(error);
    //}
  }
  const guardarTareaActual = tarea => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea
    })
  }

  const limpiarTarea = () => {
    dispatch({
      type: LIMPIAR_TAREA
    })
  }


  return (
    <TareaContext.Provider
      value={{
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
}

export default TareaState;