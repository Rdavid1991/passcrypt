import React, { useContext, useState } from 'react';
import { Button, Input, InputPassword } from '../../common';
import { useCreateForm } from '../../hooks/useCreateForm';
import { getLogin } from '../../../helpers/helpers'
import { InvalidUser } from '../../common/warnMessage.js'
import './SignIn.css';
import { useUserContext } from '../../hooks/useUserContext';

// eslint-disable-next-line react/prop-types
export const SignIn = ({ setScreen, setfade }) => {

    const  {setUser} = useContext(useUserContext) 

    const [disableButton, setDisableButton] = useState(false)

    const [inputChange, handleInputChange, reset] = useCreateForm({
        loginUser: '',
        loginPassword: ''
    });

    const { loginUser, loginPassword } = inputChange;

    const [userMessage, setUserMessage] = useState(false)

    const handleLoguin = (e) => {

        if (getLogin(loginUser, loginPassword)) {

            setUser({
                userName:loginUser,
                userPassword:loginPassword
            })

            setfade({
                password: 'animate__fadeInDown',
                signIn: 'animate__fadeOutDown',
                register: ''
            });

            setTimeout(() => {
                setScreen("password");
            }, 500);
        } else {
            setUserMessage(true)
        }
    };


    const handleRegister = () => {
        setfade({
            password: '',
            signIn: 'animate__fadeOutDown',
            register: 'animate__fadeInDown'
        });
        setTimeout(() => {
            setScreen("register");
        }, 500);
    }

    return (
        <div
            className="card card_loguin"
        >
            <h5 className="card-header">Usuario</h5>
            <div className="card-body">

                <form>
                    <div className="form-group">
                        <label htmlFor="email">E-mail o usuario</label>
                        <Input
                            type="text"
                            name="loginUser"
                            value={loginUser}
                            change={handleInputChange}
                            disableButton={disableButton}
                            setDisableButton={setDisableButton}
                        />
                    </div>
                    <div className="form-group position-relative">
                        <label htmlFor="password">contraseña</label>
                        <InputPassword
                            name="loginPassword"
                            value={loginPassword}
                            change={handleInputChange}
                        />
                        {
                            userMessage
                                ?
                                <div className="position-relative">
                                    <InvalidUser />
                                </div>
                                : null
                        }
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <Button
                            title="Conectar"
                            className="btn btn-primary"
                            click={handleLoguin}
                        />
                        <Button
                            title="Registrar"
                            className="btn btn-primary"
                            click={handleRegister}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};
