import React from 'react';

const Producto = ({ producto, carrito, setCarrito, productos }) => {


    const { nombre, precio, id } = producto;

    //funcion
    const selectProd = (id) => {
        const producto = productos.find(pro => pro.id == id);
        setCarrito([
            ...carrito,
            producto
        ]);
    }

    const eliminarProd = (id) => {
        const productosupd = carrito.filter(pro => pro.id != id);
        setCarrito([
            productosupd
        ]);
    }

    return (
        <div>
            <h2>
                {nombre}
            </h2>
            <p>
                {precio}
            </p>

            {
                productos
                    ? (<button
                        type="button"
                        onClick={() => selectProd(id)}
                    >Comprar</button>)
                    :
                    (<button
                        type="button"
                        onClick={() => eliminarProd(id)}
                    >Eliminar</button>)
            }
        </div>
    );
}

export default Producto;