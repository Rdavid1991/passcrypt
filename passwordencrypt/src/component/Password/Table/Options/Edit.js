/* eslint-disable react/prop-types */
import React from 'react';

export const Edit = ({itemId, setItemCode}) => {
    return (

        <i
            className="far fa-edit"
            data-target="#modal-edit"
            data-toggle="modal"
            onClick={()=>setItemCode( itemId )}
        >
        </i>

    );
};
