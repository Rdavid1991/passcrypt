import React, { useState } from 'react';
import { Button, Input, InputPassword } from '../../common';
import { ModalConfirm } from '../modals';
import './SignUp.css';

// eslint-disable-next-line react/prop-types
export const Register = ({ setScreen, setfade }) => {

    const [disableButton, setDisableButton] = useState(false)

    const [inputFomr, setInputFomr] = useState({
        email: '',
        username: '',
        password2: '',
        password1: ''
    });

    const [existEmail, setExistEmail] = useState(false);

    const { email, username, password1, password2 } = inputFomr;

    const handleInputField = ({ target }) => {
        setExistEmail(false);
        setInputFomr({
            ...inputFomr,
            [target.name]: target.value
        });
    };

    const handleCancel = () => {
        setfade({
            password: '',
            signIn: 'animate__fadeInDown',
            register: 'animate__fadeOutDown'
        });
        setTimeout(() => { setScreen("signIn"); }, 500);
    };

    const saveUser = (e) => {

        e.preventDefault();

        let users = JSON.parse(localStorage.getItem('user')) || [];

        if (!!users.find(i => i.email === email)) {
            setExistEmail(true);
        } else {
            users.push({
                email,
                username,
                password1
            });

            localStorage.setItem('user', JSON.stringify(users));
        }

        window.$('#confirm').modal('show');
    };

    return (
        <>
            <div className="card card_loguin" >
                <h5 className="card-header">Registro de usuario</h5>
                <div className="card-body">
                    <form
                        onSubmit={saveUser}
                    >
                        <div className="form-group position-relative">
                            <label htmlFor="email">Correo</label>

                            <Input
                                type="email"
                                name="email"
                                value={email}
                                change={handleInputField}
                                disableButton={disableButton}
                                setDisableButton={setDisableButton}
                            />
                        </div>

                        <div className="form-group position-relative">
                            <label htmlFor="exampleInputEmail1">Nombre de usuario</label>
                            <Input
                                type="text"
                                name="username"
                                value={username}
                                change={handleInputField}
                                disableButton={disableButton}
                                setDisableButton={setDisableButton}
                            />
                        </div>
                        <div className="form-group position-relative">
                            <label htmlFor="password1">Ingrese contraseña</label>
                            <InputPassword
                                name="password1"
                                value={password1}
                                change={handleInputField}
                            />
                        </div>
                        <div className="form-group position-relative">
                            <label htmlFor="exampleInputPassword1">Repita contraseña</label>
                            <InputPassword
                                name="password2"
                                value={password2}
                                change={handleInputField}
                            />
                        </div>
                        <div className="d-flex justify-content-between">
                            <Button
                                title="Registrar"
                                type="submit"
                                className="btn btn-primary mt-3"
                                disabled={existEmail ? true : false}
                            />
                            <Button
                                title="Cancelar"
                                click={handleCancel}
                                className="btn btn-secondary mt-3"
                            />
                        </div>

                    </form>
                </div>
            </div>
            <ModalConfirm handleCancel={handleCancel} existEmail={existEmail} />
        </>
    );
};
