import React, { useReducer, useState } from 'react';
import { useEffect } from 'react';
import { Delete, Edit, View } from '../../common';
import { ModalCreate, ModalEdit, ModalDelete, GeneratePassword } from '../modals';
import { serviceReducer } from '../../../reducers/serviceReducer';
import { getEncryptService, setEncryptService } from '../../../helpers/helpers';

export const TablePassword = () => {

    const [itemCode, setItemCode] = useState( '' );

    const init = () => {
        return getEncryptService( JSON.parse( localStorage.getItem( "services" )) || []);
    };

    const [services, dispatch] = useReducer( serviceReducer, [], init );

    useEffect(() => {
        localStorage.setItem( 'services', JSON.stringify( setEncryptService( services )));
    }, [services]);

    const handleServiceAdd = ( newServices ) => {

        dispatch({
            type   : 'add',
            payload: newServices
        });
    };

    const handleServiceEdit = ( serviceEdit ) => {
        dispatch({
            type   : 'edit',
            payload: serviceEdit
        });
    };

    const handleServiceDelete = ( servicesId ) => {
        dispatch({
            type   : 'delete',
            payload: servicesId
        });
    };

    return (

        <div className="w-100">
            <table id="table" className="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Servicio</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Contraseña</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody id="tBody">
                    {
                        services.map(( item, i ) => (

                            <tr key={item.id} className="animate__animated animate__fadeIn">
                                <td>{i + 1}</td>
                                <td>{item.service}</td>
                                <td>{item.user}</td>
                                <td>
                                    <View password={item.password} />
                                </td>
                                <td>
                                    <div className="d-flex justify-content-around">
                                        <Edit itemId={item.id} setItemCode={setItemCode} />
                                        <Delete itemId={item.id} setItemCode={setItemCode} />
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <GeneratePassword handleServiceAdd={handleServiceAdd} />
            <ModalCreate handleServiceAdd={handleServiceAdd} />
            <ModalEdit handleServiceEdit={handleServiceEdit} services={services} itemCode={itemCode} />
            <ModalDelete handleServiceDelete={() => handleServiceDelete( itemCode )} />
        </div>
    );
};
