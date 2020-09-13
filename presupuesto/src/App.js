import React, { Fragment, useEffect, useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';



function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);

  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);

  const [gasto, setGasto] = useState([]);
  const [creargasto, setCrearGasto] = useState(false);


  useEffect( () => {
    if(creargasto){
      setGastos([...gastos,gasto]);

      const rest = restante - gasto.cantidad
      setRestante(rest);

      setCrearGasto(false);
    }
    
  },[gasto,creargasto,gastos,restante]);

  // const addNewGasto = gasto => {
  //   setGastos([...gastos,gasto]);
  // }

  return (
    <Fragment>
      <div className="container">
        <header>
          <h1> Gasto Semanal</h1>
          <div className="contenido-principal contenido">
            {
              mostrarPregunta
                ? (
                  <Pregunta
                    setPresupuesto={setPresupuesto}
                    setRestante={setRestante}
                    setMostrarPregunta={setMostrarPregunta} />
                )
                : (
                  <div className="row">
                    <div className="one-half column">
                      <Formulario 
                      setGasto={setGasto}
                      setCrearGasto={setCrearGasto}
                       />
                    </div>
                    <div className="one-half column">
                      <Listado
                       gastos={gastos}
                      />

                      <ControlPresupuesto 
                      presupuesto={presupuesto}
                      restante={restante}/>
                    </div>
                  </div>
                )
            }





          </div>


        </header>
      </div>
    </Fragment>
  );
}

export default App;
