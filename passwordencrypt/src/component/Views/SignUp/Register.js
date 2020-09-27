import React, { useState } from 'react';
import { Button, Input, InputPassword } from '../../common';
import './SignUp.css';

// eslint-disable-next-line react/prop-types
export const Register = ({ setScreen, setfade }) => {

    const [inputFomr, setInputFomr] = useState({
        email    : '',
        username : '',
        password2: '',
        password1: ''
    });

    const { email, username, password1, password2 } = inputFomr;

    const handleInputField = ({ target }) => {

        setInputFomr({
            ...inputFomr,
            [target.name]: target.value
        });
    };

    const handleCancel = () => {
        setfade({
            password: '',
            signIn  : 'animate__fadeInDown',
            register: 'animate__fadeOutDown'
        });
        setTimeout(() => { setScreen( "signIn" ); }, 500 );
    };

    return (
        <div className="card card_loguin" >
            <h5 className="card-header">Registro de usuario</h5>
            <div className="card-body">

                <div className="form-group position-relative">
                    <label htmlFor="email">Correo</label>

                    <Input
                        type="email"
                        name="email"
                        value={email}
                        change={handleInputField}
                    />
                </div>

                <div className="form-group position-relative">
                    <label htmlFor="exampleInputEmail1">Nombre de usuario</label>
                    <Input
                        type="text"
                        name="username"
                        value={inputFomr.username}
                        change={handleInputField}
                    />
                </div>
                <div className="form-group position-relative">
                    <label htmlFor="password1">Ingrese contraseña</label>
                    <InputPassword
                        name="password1"
                        value={inputFomr.password1}
                        change={handleInputField}
                    />
                </div>
                <div className="form-group position-relative">
                    <label htmlFor="exampleInputPassword1">Repita contraseña</label>
                    <InputPassword
                        name="password2"
                        value={inputFomr.password2}
                        change={handleInputField}
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <Button
                        title="Registrar"
                        className="btn btn-primary mt-3"
                    />
                    <Button
                        title="Cancelar"
                        click={handleCancel}
                        type="button"
                        className="btn btn-secondary mt-3"
                    />
                </div>

            </div>
        </div>
    );
};
