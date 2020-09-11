import React, { Fragment, useState, useEffect } from 'react';
import Cita from './components/Cita';
import Formulario from './components/Formulario'

function App() {
  
  let citasIni = JSON.parse(localStorage.getItem('citas'));

  if(!citasIni) citasIni = [];

  const [citas, updateCitas] = useState(citasIni);

  useEffect(() => {
    let citasIni = JSON.parse(localStorage.getItem('citas'));
    if(citasIni){
      localStorage.setItem('citas',JSON.stringify(citas));
    }
    else{
      localStorage.setItem('citas',JSON.stringify([]));
    }
  },[citas]);

  const createCita = cita => {
    updateCitas([
      ...citas,
      cita
    ]);
  }

  const deleteCita = id => {
    const newCitas = citas.filter(flt => flt.id !== id);
    updateCitas(newCitas);
  }

  //mensaje
  const titulo = citas.length === 0 ? 'No hay Citas' : 'Administra Tus Citas'


  return (
    <Fragment>
      <h1> Admin De Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              createCita={createCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {
              citas.map(map => (
                <Cita
                  key={map.id}
                  cita={map}
                  deleteCita={deleteCita}
                />
              ))
            }
          </div>

        </div>

      </div>
    </Fragment>
  );
}

export default App;
