import React from 'react';

const Barra = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">Hola <span>kevin </span> </p>

      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          // onClick={() => cerrarSesion()}
        >Cerrar Sesión</button>
      </nav>
    </header>
  );
}

export default Barra;