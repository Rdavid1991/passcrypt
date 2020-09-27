import React ,{useState} from 'react';
import { haveInvalidChart } from '../../helpers/helpers';
import { InvalidTypeChart } from './warnMessage';


export const InputPassword = ({ name, value, change }) => {
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