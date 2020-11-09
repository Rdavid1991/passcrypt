import React, { useContext } from 'react';
import { useCreateForm } from '../../hooks/useCreateForm';
import { useUserContext } from '../../hooks/useUserContext';
import { ModalForm } from './ModalForm';

// eslint-disable-next-line react/prop-types
export const ModalCreate = ({ handleServiceAdd }) => {
    const context = useContext(useUserContext)

    const {userName} = context.user

    const [inputChange, handleInputChange, reset] = useCreateForm({
        service : '',
        user    : '',
        password: ''
    });

    const { user, service, password } = inputChange;

    const handleSaveService = ( e ) => {

        e.preventDefault();

        handleServiceAdd({
            id: new Date().getTime(),
            owner: userName,
            user,
            service,
            password,
        });

        reset();
    };

    return (
        <ModalForm
            handleSaveService={handleSaveService}
            handleInputChange={handleInputChange}
            inputChange={inputChange}
            htmlId={"modal-form"}
        />
    );
};
