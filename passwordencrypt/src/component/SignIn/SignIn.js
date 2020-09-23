import React from 'react';
import './SignIn.css';

// eslint-disable-next-line react/prop-types
export const SignIn = ({ setScreen, setfade }) => {

    const handleChangeScreen = ( e ) => {
        e.preventDefault();

        const { target } = e;

        if ( target.id === "loguinform" ) {
            setfade({
                password: 'animate__fadeInDown',
                signIn  : 'animate__fadeOutDown',
                register: ''
            });

            setTimeout(() => {
                setScreen( "password" );
            }, 500 );

        } else {
            setfade({
                password: '',
                signIn  : 'animate__fadeOutDown',
                register: 'animate__fadeInDown'
            });
            setTimeout(() => {
                setScreen( "register" );
            }, 500 );
        }
    };

    return (
        <div
            className="card card_loguin"
        >
            <h5 className="card-header">Usuario</h5>
            <div className="card-body">
                <form
                    id="loguinform"
                    onSubmit={handleChangeScreen}
                >
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            name="user"
                            type="text"
                            className="form-control"
                            aria-describedby="emailHelp"

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                        />
                    </div>
                    <small
                        id="credential"
                        className="credential position-absolute text-warning d-none"
                    >Usuario o contraseñas invalidos</small>
                    <div className="d-flex justify-content-between">
                        <button
                            id="btntest"
                            type="submit"
                            className="btn btn-primary"
                        >Conectar</button>

                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleChangeScreen}
                        >Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
