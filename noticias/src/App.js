import React, { Fragment, useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';

function App() {


  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const appId='4b759580b98e4cda958cbc1863e0469f';
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${appId}`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      setNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      />
      <div className="container white">
            <Formulario 
              setCategoria={setCategoria}
            />

            <ListadoNoticias 
              noticias={noticias}
            />
        </div>
    </Fragment>

  );
}

export default App;
