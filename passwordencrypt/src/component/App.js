import React, { useState } from 'react';
import { useUserContext } from './hooks/useUserContext';
import { Password } from './Views/Password/Password';
import { SignIn } from './Views/SignIn/SignIn';
import { Register } from './Views/SignUp/Register';




export const App = () => {

    const [user, setUser] = useState({
        userName:"",
        userPassword:""
    })

    const [screen, setScreen] = useState( "signIn" );

    const [fade, setfade] = useState({
        signIn  : 'animate__fadeInDown',
        password: '',
        register: '',
        generate: ''
    });


    return (

        <useUserContext.Provider value={{
            user,
            setUser
        }}>
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
                            style={{ animationFillMode: 'none' }}
                        >
                            <Password setScreen={setScreen} setfade={setfade} />
                        </div>
                        :
                        null
                }
                {
                    screen === "register" ?
                        <div className={`animate__animated ${fade.register}`}
                            style={{ animationFillMode: 'none' }}
                        >
                            <Register setScreen={setScreen} setfade={setfade} />
                        </div>

                        :
                        null
                }
            </div>

        </div >

        </useUserContext.Provider>

    );
};
