import React from 'react';
import { Button, Input, InputPassword } from '../../common';
import './SignIn.css';

// eslint-disable-next-line react/prop-types
export const SignIn = ({ setScreen, setfade }) => {

    const handleChangeScreen = ( e ) => {

        if ( e === "loguinform" ) {
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

                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <Input
                        name="user"
                        type="text"
                        value="test"
                    />
                </div>
                <div className="form-group position-relative">
                    <label htmlFor="password">contraseña</label>

                    <InputPassword
                        name="password"
                        value="test"
                        change={() => { }}
                    />
                </div>
                {/*  <small
                        id="credential"
                        className="credential position-absolute text-warning d-none"
                    >Usuario o contraseñas invalidos</small> */}
                <div className="d-flex justify-content-between">
                    <Button
                        title="Conectar"
                        className="btn btn-primary"
                        click={()=>handleChangeScreen( "loguinform" )}
                    />
                    <Button
                        title="Registrar"
                        className="btn btn-primary"
                        click={handleChangeScreen}
                    />
                </div>
            </div>
        </div>
    );
};
