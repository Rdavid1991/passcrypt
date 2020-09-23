/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { haveInvalidChart } from '../../helpers/helpers';
import { InvalidTypeChart } from '../messages/warnMessage';

const Input = ({ type, name, value, change }) => {
    return (
        <>
            <input
                type={type}
                name={name}
                value={value}
                className="form-control"
                onChange={change}
                autoComplete="off"
            />
            {
                haveInvalidChart( value )
                    ? <InvalidTypeChart value={value} />
                    : null
            }

        </>
    );
};

const InputPassword = ({ name, value, change }) => {
    const [view, setView] = useState( false );

    const handleHidePassword = () => {
        setView( !view );
    };
    return (
        <>
            <input
                type={view ? "text" : "password"}
                name={name}
                value={value}
                onChange={change}
                className="form-control"
            />
            <i
                className={view ? "far fa-eye" : "far fa-eye-slash"}
                onClick={handleHidePassword}
                style={{
                    position: "absolute",
                    top     : "3rem",
                    right   : "1rem"
                }}></i>
            {
                haveInvalidChart( value )
                    ? <InvalidTypeChart value={value} />
                    : null
            }
        </>
    );
};

const Button = ({title,click,dataDismiss,dataTarget,dataToggle,className}) => {
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


export {
    Input,
    InputPassword,
    Button
};
