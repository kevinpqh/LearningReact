import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'

function App() {

  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Camisa 1', precio: 50 },
    { id: 2, nombre: 'Camisa 2', precio: 50 },
    { id: 3, nombre: 'Camisa 2', precio: 50 },
    { id: 4, nombre: 'Camisa 4', precio: 50 }
  ]);

  //State carro
  const [carrito, setCarrito] = useState([]);

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        titulo="PAss Var"
      />
      <h1>        Lista Prod      </h1>
      {
        productos.map(map => (
          <Producto
            key={map.id}
            producto={map}
            productos={productos}
            carrito ={carrito}
            setCarrito={setCarrito}
          />
        ))
      }

      <Carrito
      carrito ={carrito}
      setCarrito={setCarrito}
      />

      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
