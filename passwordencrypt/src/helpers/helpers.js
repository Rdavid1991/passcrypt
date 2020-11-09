import { AES, enc } from 'crypto-js';
import { useContext } from 'react';
import { useUserContext } from '../component/hooks/useUserContext';


const invalidchart = /<|>/g

const haveInvalidChart = ( target ) => {
    return target.match( invalidchart )
        ? true
        : false;
};

const initEdit = ( services, itemCode ) => {
    const service = services.filter( item => item.id === itemCode );

    if ( !service.length > 0 ) {
        service.push({ id: '', user: '', service: '', password: '' });
    } 

    return service[0];
};

const getEncryptService = ( items ) => {

    let service = items;

    service.map(( item ) => {
        item.service = AES.decrypt( item.service, "test" ).toString( enc.Utf8 );
        item.user = AES.decrypt( item.user, "test" ).toString( enc.Utf8 );
        item.password = AES.decrypt( item.password, "test" ).toString( enc.Utf8 );
        return item;
    });

    return service;
};

const setEncryptService = ( service ) => {

    let items = [];

    service.map(( item ) => {
        
        items.push({
            owner   : item.owner,
            id      : item.id,
            service : AES.encrypt( item.service, "test" ).toString(),
            user    : AES.encrypt( item.user, "test" ).toString(),
            password: AES.encrypt( item.password, "test" ).toString()
        });
    });

    return items;
};

const getDisableButton = (...arg) => {
    const state = arg.map(item => !!item.match( invalidchart ))
    return state.includes(true);
};

const getLogin = (user, pass)=>{

    let users = JSON.parse(localStorage.getItem('user')) || [];
    return !!users.find(i => (i.email === user || i.username === user) && i.password1 === pass)   
}


export {
    getDisableButton,
    haveInvalidChart,
    initEdit,
    getLogin,
    getEncryptService,
    setEncryptService,
};

