/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export const View = ({ password }) => {

    const [view, setView] = useState( false );

    const handleViewStatus = () => {
        setView( !view );
    };

    return (
        <>
            {view
                ? password 
                : "*************"
            }
            <i
                className={`${( view ? "far fa-eye" : "far fa-eye-slash" )} float-right`}
                onClick={handleViewStatus}
            ></i>
        </>
    );
};
