import React from 'react'
import '@testing-library/jest-dom'
import { ModalForm } from '../component/Views/modals/ModalForm';
import { shallow } from 'enzyme'
import { haveInvalidChart } from '../helpers/helpers';
import { generate } from '../helpers/generate';
describe('Test unitarios', () => {



    test('Debe guardar los valores ', () => {

        const handleSaveService = jest.fn()

        let inputChange = { user: 'Jorge', service: 'Facebook', password: 'pollofrito' };

        const wrapper = shallow(<ModalForm inputChange={inputChange} handleSaveService={handleSaveService} />)

        expect(wrapper.find('Input[name="user"]').prop('value')).toBe('Jorge');
        expect(wrapper.find('Input[name="service"]').prop('value')).toBe('Facebook');
        expect(wrapper.find('InputPassword').prop('value')).toBe('pollofrito');

        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(handleSaveService).toBeCalled();

    })

    test('Valida caracteres validos e invalidos ', () => {

        const invalidChart = 'usuario<'
        const validChart = 'usuario'

        expect(haveInvalidChart(invalidChart)).toBe(true)
        expect(haveInvalidChart(validChart)).toBe(false)
    })

    test('Valida la longitud al generar contraseñas ', () => {

        let type, number;

        type = "lettersNumbers"
        number = 18

        expect(generate(type, number).length).toBe(number)
        expect(!!generate(type, number).match(/[0-9A-Za-z]/g)).toBe(true)

        type = "letters"
        number = 5

        expect(generate(type, number).length).toBe(number)
        expect(!!generate(type, number).match(/[A-Za-z]/g)).toBe(true)

        type = "numbers"
        number = 13

        expect(generate(type, number).length).toBe(number)
        expect(!!generate(type, number).match(/[0-9]/g)).toBe(true)
    })

})
