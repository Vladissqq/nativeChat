const initialState = {
    connection: null
}

export function socketReducer(state = initialState, action) {
    switch (action.type) {
        case 'CREATE_CONNECTION':
            return {
                ...state,
                connection: action.payload,
            };
        case 'DELETE_CONNECTION':
            return {
                ...state,
                connection: null,
            };
        default:
            return state;
    }
}