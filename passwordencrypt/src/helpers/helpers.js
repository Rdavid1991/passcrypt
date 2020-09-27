import { AES, enc } from 'crypto-js';

const haveInvalidChart = ( target ) => {
    return target.match( /</g )
        ? true
        : false;
};

const decryptEdit = ( field ) => {
    return field.length >= 44
        ? AES.decrypt( field, 'test' ).toString( enc.Utf8 )
        : field;
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
        item.service = AES.decrypt( item.service, 'test' ).toString( enc.Utf8 );
        item.user = AES.decrypt( item.user, 'test' ).toString( enc.Utf8 );
        item.password = AES.decrypt( item.password, 'test' ).toString( enc.Utf8 );
        return item;
    });

    console.log( service );
    return service;
};

const setEncryptService = ( service ) => {

    let items = [];

    service.map(( item ) => {
        items.push({
            id      : item.id,
            service : AES.encrypt( item.service, 'test' ).toString(),
            user    : AES.encrypt( item.user, 'test' ).toString(),
            password: AES.encrypt( item.password, 'test' ).toString()
        });
    });

    return items;
};

export {
    haveInvalidChart,
    decryptEdit,
    initEdit,
    getEncryptService,
    setEncryptService
};

