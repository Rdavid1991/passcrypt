import React from 'react';

const InvalidTypeChart = () => {
    return (
        <small className="position-absolute text-warning">caracter invalido </small>
    );
};

const InvalidUser = () => {
    return (
        <small className="position-absolute text-warning">Contraseña o usuario invalido</small>
    );
};

export {
    InvalidTypeChart,
    InvalidUser
};
