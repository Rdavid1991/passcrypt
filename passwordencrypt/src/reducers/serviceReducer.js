

export const serviceReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter( item => item.id !== action.payload );

        case 'edit':
            return state.map( item =>{
                console.log(item);
                if ( item.id === action.payload.id ) {
                    return item = action.payload;
                }else{
                    return item;
                }
            });
        default:
            return state;
    }
};
