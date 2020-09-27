import React from 'react';
import { TablePassword } from './Table/TablePassword';
import './Password.css';
import { Button } from '../items/Items';

// eslint-disable-next-line react/prop-types
export const Password = ({ setScreen, setfade }) => {

    const handleLogout = () => {

        setfade({
            password: 'animate__fadeOutDown',
            signIn  : 'animate__fadeInDown',
            register: ''
        });

        setTimeout(() => {
            setScreen( 'signIn' );
        }, 500 );
    };

    return (
        <>
            <div className="card_table">
                <div className="d-flex justify-content-between align-in mb-2 ">
                    <Button
                        className="btn btn-primary"
                        dataTarget="#modal-form"
                        dataToggle="modal"
                        title="Agregar contraseña"
                    />
                    <Button
                        title="Generar contraseña"
                        dataTarget="#generate"
                        dataToggle="modal"
                        className="btn btn-info"
                    />
                    <button
                        className="btn btn-outline-secundary"
                        onClick={handleLogout}
                    >
                        Desconectar
                        </button>
                </div>
                <div className="card card_table_body overflow-auto">
                    <div className="card-header position-sticky">
                        <div className="card-title">
                            Contraseñas y servicios
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center">
                            <TablePassword />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
