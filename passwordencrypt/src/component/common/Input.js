import React from 'react';
import { haveInvalidChart } from '../../helpers/helpers';
import { InvalidTypeChart } from './warnMessage';

export const Input = ({ type, name, value, change }) => {
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