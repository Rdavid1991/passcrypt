/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useCreateForm } from '../../hooks/useCreateForm';
import { ModalForm } from './ModalForm';
import { initEdit } from '../../../helpers/helpers';

//import PropType from 'prop-types';

export const ModalEdit = ({ handleServiceEdit, services, itemCode }) => {

    const [inputChange, handleInputChange, setEditValue] = useCreateForm( initEdit( services,itemCode ));

    const { id, user, service, password } = inputChange;

    useEffect(() => {
        setEditValue( initEdit( services,itemCode ));
    }, [itemCode]);



    const handleSaveService = ( e ) => {
        e.preventDefault();

        handleServiceEdit({
            id,
            user   ,
            service ,
            password
        });

        window.$( '#modal-edit' ).modal( 'hide' );
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

/* ModalEdit.prototype = {
    itemCode: PropType.string
} */
