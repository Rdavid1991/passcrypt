/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Input, InputPassword } from '../../common';

export const ModalForm = ({ handleSaveService, handleInputChange, inputChange, htmlId }) => {

    const { user, service, password } = inputChange;

    return (
        <div className="modal fade" id={htmlId}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" >Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div
                                className="form-group"
                            >
                                <label htmlFor="service">Servicio</label>
                                <Input
                                    type="text"
                                    value={service}
                                    name="service"
                                    change={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user">Usuario</label>
                                <Input
                                    type="text"
                                    value={user}
                                    name="user"
                                    change={handleInputChange}
                                />

                            </div>
                            <div className="form-group position-relative">
                                <label htmlFor="password">Contraseña</label>
                                <InputPassword
                                    value={password}
                                    name="password"
                                    change={handleInputChange}
                                />
                            </div>
                            <div className="modal-footer">
                                <Button
                                    dataDismiss="modal"
                                    type="button"
                                    className="btn btn-secondary"
                                    title="Cancelar"
                                />
                                <Button
                                    dataDismiss={
                                        htmlId === "modal-edit"
                                            ? "modal"
                                            : null
                                    }
                                    click={handleSaveService}
                                    className="btn btn-primary"
                                    title="Guardar"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
