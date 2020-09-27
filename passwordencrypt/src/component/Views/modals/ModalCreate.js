import React from 'react';
import { useCreateForm } from '../../hooks/useCreateForm';
import { ModalForm } from './ModalForm';

// eslint-disable-next-line react/prop-types
export const ModalCreate = ({ handleServiceAdd }) => {

    const [inputChange, handleInputChange, reset] = useCreateForm({
        service : '',
        user    : '',
        password: ''
    });

    const { user, service, password } = inputChange;

    const handleSaveService = () => {

        handleServiceAdd({
            id: new Date().getTime(),
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
