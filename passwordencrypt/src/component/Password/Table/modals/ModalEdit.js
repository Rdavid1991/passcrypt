/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { AES } from 'crypto-js';
import { useCreateForm } from '../../../../hooks/useCreateForm';
import { ModalForm } from './ModalForm';
import { initEdit } from '../../../../helpers/helpers';

export const ModalEdit = ({ handleServiceEdit, services, itemCode }) => {

    const [inputChange, handleInputChange, setEditValue] = useCreateForm( initEdit( services,itemCode ));

    const { id, user, service, password } = inputChange;

    useEffect(() => {
        setEditValue( initEdit( services,itemCode ));
    }, [itemCode]);

    const handleSaveService = ( ) => {
        handleServiceEdit({
            id,
            user   ,
            service ,
            password
        });
    };

    return (
        <ModalForm
            handleSaveService={handleSaveService}
            handleInputChange={handleInputChange}
            inputChange={inputChange}
            htmlId={"modal-edit"}
        />
    );
};
