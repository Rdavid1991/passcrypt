

let posible = "";
export const generate = ( type, length ) => {

    let newPassword = ""; 

    switch ( type ) {
        case 'lettersNumbers':
            posible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            newPassword = getPassword( length, /[0-9]/gim );
            break;

        case 'letters':
            posible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            newPassword = getPassword( length );
            break;
        case 'numbers':
            posible = '0123456789';
            newPassword = getPassword( length );
            break;
        case 'all':
            posible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$&@*+#';
            newPassword = getPassword( length,/[A-Za-z][?=$&@*+#][?=0-9]/gim );
            break;
        default:
            break;
    }

    return newPassword;
};

const getPassword = ( length, key )=>{
        

    let randomName = "";

    for ( let i = 0; i < length; i++ ) {
        randomName += posible.charAt( Math.floor( Math.random() * posible.length ));
    }

    if ( !!!randomName.match( key )) {
        return getPassword( length, key );
    }else{
        return randomName;
    }
};


