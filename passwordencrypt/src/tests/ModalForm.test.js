import '@testing-library/jest-dom'
import React from 'react';
import { shallow } from 'enzyme';
import { ModalForm } from '../component/Views/modals/ModalForm';

describe('Pruebas a formulario', () => {

    const inputChange = {
        user: "test",
        service:"test",
        password:"test"
    }

    const handleSaveService = jest.fn();

    let wrapper = shallow(<ModalForm inputChange={inputChange} handleSaveService={handleSaveService}/>)

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<ModalForm inputChange={inputChange} handleSaveService={handleSaveService}/>)
    });

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe bloquear el boton guardar ', () => {

        console.log(wrapper);

        wrapper.find('form').simulate('submit' , { preventDefault(){}});

        expect(handleSaveService).toBeCalled();
    })
    
    
})
