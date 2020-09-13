import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({ gastos }) => {
    return (
        <div className="gastos-realizados">
            <h2>Lista de gastos</h2>
            {
                gastos.map(map => (
                    <Gasto
                        key={map.id}
                        gasto={map}
                    />
                ))
            }

        </div>
    );
}
Listado.prototypes = {
    gastos: PropTypes.array.isRequired
}

export default Listado;