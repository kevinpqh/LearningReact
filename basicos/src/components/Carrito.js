import React from 'react';
import Producto from './Producto'
import './carrito.css'

const Carrito = ({ carrito,setCarrito }) => {
    return (
        <div className="carrito">
            <h2>
                EL carro
            </h2>
            {
                carrito.length == 0
                    ? <p>no nadad</p>
                    : carrito.map(map => (
                        <Producto
                            key={map.id}
                            producto={map}
                            carrito={carrito}
                            setCarrito={setCarrito}
                        />
                    ))
            }
        </div>
    );
}

export default Carrito;