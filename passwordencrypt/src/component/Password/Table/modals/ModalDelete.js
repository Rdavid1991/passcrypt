import React from 'react';

// eslint-disable-next-line react/prop-types
export const ModalDelete = ({ handleServiceDelete }) => {
    return (
        <div id="modal-confirm" className="modal fade">
            <div className="modal-dialog" style={{ marginTop: '15%' }}>
                <div className="modal-content">
                    <div className="modal-body text-center">
                        <h2>¿Desea borrar?</h2>
                        <hr />
                        <div className="d-flex justify-content-around">
                            <button
                                data-target="#modal-confirm"
                                data-dismiss="modal"
                                className="btn btn-secondary w-25"
                            >
                                No
                            </button>
                            <button
                                data-target="#modal-confirm"
                                data-dismiss="modal"
                                className="btn btn-primary w-25"
                                onClick={handleServiceDelete}
                            >
                                Si
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
