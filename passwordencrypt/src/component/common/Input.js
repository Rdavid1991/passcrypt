import React, { useEffect } from 'react';
import { haveInvalidChart } from '../../helpers/helpers';
import { InvalidTypeChart } from './warnMessage';

// eslint-disable-next-line react/prop-types
export const Input = ({ type, name, value, change }) => {

    return (
        <>
            <input
                type={type}
                name={name}
                value={value}
                className="form-control"
                onChange={change}
                required
                autoComplete="off"
            />
            {
                haveInvalidChart(value)
                    ? <InvalidTypeChart value={value} />
                    : null
            }

        </>
    );
};