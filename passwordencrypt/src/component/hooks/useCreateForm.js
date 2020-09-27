import { useState } from "react";


export const useCreateForm = ( initialState = {}) => {

    const [values, setValues] = useState( initialState );

    const reset = () => {
        setValues( initialState );
    };

    const setEditValue = ( values )=>{
        setValues( values );
    };

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    };


    return [values, handleInputChange, reset, setEditValue];
};