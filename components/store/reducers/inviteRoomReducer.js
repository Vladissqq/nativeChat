const defaultState = {
    invite: null,
};

export function inviteRoomReducer(state = defaultState, action) {
    if(action.type === 'ROOM_INVITE'){
        return {
            invite: action.payload
        }
        
    }
    return state
}