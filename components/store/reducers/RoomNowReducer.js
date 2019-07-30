const defaultState = {
    roomNow: 'all',
};

export function roomNowReducer(state = defaultState, action) {
    if(action.type === 'ROOM_NOW'){
        return {
            roomNow: action.payload
        }
    }
    return state
}