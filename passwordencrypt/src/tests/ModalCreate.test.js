import '@testing-library/jest-dom'
import React from 'react';
import { shallow } from 'enzyme';
import { ModalCreate } from "../component/Views/modals/ModalCreate"
import { useUserContext } from '../component/hooks/useUserContext';

describe('Pruebas en crear', () => {

    const wrapper = shallow(
        <useUserContext value={{
            user: {
                userName: "userTest",
                userPassword: "userPassword"
            }
        }}>
            <ModalCreate/>
        </useUserContext>
    )

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })
})


