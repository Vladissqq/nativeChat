const defaultState = {
    messages: [],
};

export function messageReducer(state = defaultState, action) {
    if(action.type === 'MESSAGE'){
        return {
            messages: [...state.messages,action.payload]
        }
    }
    return state
}