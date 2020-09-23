/* eslint-disable react/prop-types */
import React from 'react';

export const Delete = ({itemId,setItemCode}) => {

    const handleDeleteCode = ({target})=>{
        setItemCode( itemId );
    };

    return (
        <>
            <i
                className="far fa-trash-alt"
                data-target="#modal-confirm"
                data-toggle="modal"
                onClick={handleDeleteCode}
            >
            </i>

        </>
    );
};
