import React from 'react'

function Header({titulo}){

    console.log("Props",titulo);


    return(
    <h1 className="encabezado">{titulo}</h1>
    );
}
export default Header;