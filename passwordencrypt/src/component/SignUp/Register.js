import React from 'react';
import { useState } from 'react';
import { haveInvalidChart } from '../../helpers/helpers';
import { InvalidTypeChart } from '../messages/warnMessage';
import './SignUp.css';

// eslint-disable-next-line react/prop-types
export const Register = ({ setScreen,setfade }) => {

    const [inputFomr, setInputFomr] = useState({
        email    : '',
        username : '',
        password2: '',
        password1: ''
    });

    const {email,username,password1,password2} = inputFomr; 

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
                <form id="register"
                    onSubmit={e => e.preventDefault()}
                >
                    <div className="form-group position-relative">
                        <label htmlFor="email">Correo</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            className="form-control"
                            onChange={handleInputField}
                        />
                        {
                            haveInvalidChart( email )
                                ? <InvalidTypeChart/>
                                : null
                        }

                    </div>

                    <div className="form-group position-relative">
                        <label htmlFor="exampleInputEmail1">Nombre de usuario</label>
                        <input
                            type="text"
                            name="username"
                            value={inputFomr.username}
                            className="form-control"
                            onChange={handleInputField}
                        />
                        {
                            haveInvalidChart( username )
                                ? <InvalidTypeChart/>
                                : null
                        }
                    </div>
                    <div className="form-group position-relative">
                        <label htmlFor="password1">Ingrese contraseña</label>
                        <input
                            type="password"
                            name="password1"
                            value={inputFomr.password1}
                            className="form-control"
                            onChange={handleInputField}
                        />
                        {
                            haveInvalidChart( password1 )
                                ? <InvalidTypeChart/>
                                : null
                        }
                    </div>
                    <div className="form-group position-relative">
                        <label htmlFor="exampleInputPassword1">Repita contraseña</label>
                        <input
                            type="password"
                            name="password2"
                            value={inputFomr.password2}
                            className="form-control"
                            onChange={handleInputField}
                        />
                        {
                            haveInvalidChart( password2 )
                                ? <InvalidTypeChart/>
                                : null
                        }
                        {
                            false
                                ? <small id="confirm" className="position-absolute text-warning">Contraseña es distinta</small>
                                : null
                        }

                    </div>

                    <div className="d-flex justify-content-between">
                        <button
                            type="submit"
                            className="btn btn-primary mt-3">
                            Registrar
                        </button>

                        <button
                            onClick={handleCancel}
                            type="button"
                            className="btn btn-secondary mt-3"
                        >Cancelar
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
    );
};
