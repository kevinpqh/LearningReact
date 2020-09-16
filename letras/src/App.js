import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Cancion from './components/Cancion';
import Formulario from './components/Formulario';

function App() {

  const [busquedaletra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');
  const [info, setInfo] = useState({});

  useEffect(() => {
    if(Object.keys(busquedaletra).length === 0 ) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ]);

      setLetra(letra.data.lyrics);
      setInfo(informacion.data.artists[0]);

      // guardarLetra(resultado.data.lyrics);
    }
    consultarApiLetra();
  }, [busquedaletra, info]);

  return (
    <Fragment>
      <Formulario setBusquedaLetra={setBusquedaLetra}/>

      <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                {/* <Info 
                  info={info}
                /> */}
              </div>
              <div className="col-md-6">
                  <Cancion 
                    letra={letra}
                  />
              </div>
            </div>
          </div>
    </Fragment>
  );
}

export default App;
