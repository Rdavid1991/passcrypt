import React from 'react';

// eslint-disable-next-line react/display-name
export const WaningCharacter = React.memo(() => {
    return (
        <small className="position-absolute text-warning d-none">Caracteres invalidos {"#Caracteres"}</small>
    );
});
