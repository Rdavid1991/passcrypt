
import React from 'react';


export const Button = ({title,click,dataDismiss,dataTarget,dataToggle,className}) => {

    return (
        <>
            <button
                type="button"
                data-dismiss={dataDismiss}
                data-target={dataTarget}
                data-toggle={dataToggle}
                onClick={click}
                className={className}
            >
                {title}
            </button>
        </>
    );
};