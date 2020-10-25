
import React from 'react';


export const Button = ({title,click,dataDismiss,dataTarget,dataToggle,className, disabled, type = "button"}) => {

    return (
        <>
            <button
                type={type}
                data-dismiss={dataDismiss}
                data-target={dataTarget}
                data-toggle={dataToggle}
                onClick={click}
                className={className}
                disabled={disabled}
            >
                {title}
            </button>
        </>
    );
};