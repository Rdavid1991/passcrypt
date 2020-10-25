import React from 'react';
import { Button } from '../../common';

export const ModalConfirm = ({handleCancel,existEmail}) => {
    return (
        <div className="modal fade" id="confirm">
            <div className="modal-dialog" style={{ top: '25%' }}>
                <div className="modal-content">
                    <div className="modal-body">
                        <h3 className="text-center">
                            { existEmail? "El email existe"  : "Se registro satisfactoriamente"}
                        </h3>
                        <div className="d-flex justify-content-center">
                            <Button
                                title="OK"
                                className="btn btn-success"
                                dataDismiss="modal"
                                click={existEmail? ()=>{}  : handleCancel}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
