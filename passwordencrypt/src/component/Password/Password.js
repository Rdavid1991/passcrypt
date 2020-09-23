import React from 'react';
import { TablePassword } from './Table/TablePassword';
import './Password.css';

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
                    <button
                        className="btn btn-primary"
                        data-target="#modal-form"
                        data-toggle="modal"
                    >
                        Agregar contraseña
                        </button>
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
