import React, { useState } from 'react';

import { Password } from './Password/Password';

import { Register } from './SignUp/Register';
import { SignIn } from './SignIn/SignIn';


export const App = () => {

    const [screen, setScreen] = useState( "signIn" );

    const [fade, setfade] = useState({
        signIn  : 'animate__fadeInDown',
        password: '',
        register: '',
        generate: ''
    });


    return (
        <div className="overflow-hidden min-vh-100">
            <div className="d-flex justify-content-center align-items-center w-100 vh-100">

                {
                    screen === "signIn" ?
                        <div className={`animate__animated ${fade.signIn}`}>
                            <SignIn setScreen={setScreen} setfade={setfade} />
                        </div>
                        :
                        null
                }
                {
                    screen === "password" ?
                        <div
                            className={`animate__animated ${fade.password} d-flex justify-content-center w-100`}
                            style={{animationFillMode: 'none'}}
                        >
                            <Password setScreen={setScreen} setfade={setfade} />
                        </div>
                        :
                        null
                }
                {
                    screen === "register" ?
                        <div className={`animate__animated ${fade.register}`}>
                            <Register setScreen={setScreen} setfade={setfade} />
                        </div>

                        :
                        null
                }
            </div>

        </div >

    );
};
