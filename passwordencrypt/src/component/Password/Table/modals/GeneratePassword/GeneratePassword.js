import React from 'react';
import { useState } from 'react';
import { useCreateForm } from '../../../../../hooks/useCreateForm';
import { Button, Input } from '../../../../items/Items';
import { generate } from './generate';

// eslint-disable-next-line react/prop-types
export const GeneratePassword = ({handleServiceAdd}) => {


    const [property, setProperty] = useState({
        type  : 'lettersNumbers',
        length: '5'
    });

    const [inputChange, handleInputChange, reset] = useCreateForm({
        service : '',
        user    : '',
        password: ''
    });

    const  { service, user, password} = inputChange;

    const { length, type } = property;

    const handleSelectionChange = ({ target }) => {
        setProperty({
            ...property,
            [target.name]: target.value
        });
    };

    const handleGenerate = () => {

        handleInputChange({
            target: {
                name : 'password',
                value: generate( type, length )
            }
        }); 
    };

    const handleSaveService = () => {

        handleServiceAdd({
            id: new Date().getTime(),
            user,
            service,
            password,
        });

        reset();
    };

    const lengthPassword = () => {

        let options = [];

        for ( let i = 5; i < 19; i++ ) {
            options.push( <option key={i} value={i}>{i}</option> );
        }
        return options;
    };

    return (
        <div className="modal fade" id="generate">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" >Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="form-group p-3">
                                <label htmlFor="service">Servicio</label>
                                <Input
                                    type="text"
                                    name="service"
                                    value={service}
                                    change={handleInputChange}
                                />
                            </div>
                            <div className="form-group p-3">
                                <label htmlFor="user">Usuario</label>
                                <Input
                                    type="text"
                                    name="user"
                                    value={user}
                                    change={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 form-group">
                                <div className="card shadow rounded">
                                    <div className="card-body">
                                        <label htmlFor="type">Tipo</label>
                                        <select
                                            className="form-control"
                                            value={type}
                                            name="type"
                                            id="cars"
                                            onChange={handleSelectionChange}
                                        >
                                            <option value="lettersNumbers">Letras y numeros</option>
                                            <option value="letters">Solo letras</option>
                                            <option value="numbers">Solo numeros</option>
                                            <option value="all">Todos los caracteres</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 form-group">

                                <div className="card shadow rounded">
                                    <div className="card-body">
                                        <label htmlFor="">Longitud de caracteres</label>

                                        <select
                                            className="form-control"
                                            value={length}
                                            onChange={handleSelectionChange}
                                            name="length"
                                            id="cars">
                                            {
                                                lengthPassword()
                                            }
                                        </select>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 form-group">
                                <Button
                                    title="Generar"
                                    className="btn btn-success"
                                    click={handleGenerate}
                                />
                            </div>
                            <div className="col-6 form-group">
                                <Input
                                    type="text"
                                    name="password"
                                    value={password}
                                    change={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                            <Button
                                title="Cancelar"
                                className="btn btn-primary"
                                dataDismiss="modal"
                            />
                            <Button
                                title="Guardar"
                                className="btn btn-secondary"
                                click={handleSaveService}
                            />
                    </div>
                </div>
            </div>
        </div>
    );
};
