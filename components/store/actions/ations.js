import axios from 'axios';


export const createConnection = socket => ({ type: 'CREATE_CONNECTION', payload: socket });
export const deleteConnection = () => ({ type: 'DELETE_CONNECTION' });

export function write(message) {
  return {
    type: 'MESSAGE',
    payload: message
  }
};

export function idOnline(arr) {
  return {
    type: 'ONLINE',
    payload: arr
  }
};

export function roomAction(formData) {
  return {
    type: 'ROOM',
    payload: formData
  }
};

export function inf(info) {
  return {
    type: 'INFO',
    payload: info
  }
};

export function usersAction(users) {
  return {
    type: 'USERS',
    payload: users
  }
}

export function roomNow(roomName) {
  return {
    type: 'ROOM_NOW',
    payload: roomName
  }
}

export function roomInvite(roomName) {
  return {
    type: 'ROOM_INVITE',
    payload: roomName
  }
}

export const getUsers = () => {
  return (dispatch) => {
    axios.get('http://192.168.0.112:8124/users')
      .then(
        (res) => {
          dispatch(usersAction(res.data))
        }
      )
  }
}

export const getInfo = () => {
  return (dispatch) => {
    axios.get('http://192.168.0.112:8124/get_info')
      .then(
        (res) => {
          const info = {
            email: res.data.email,
            firstName: res.data.firstName,
            secondName: res.data.secondName,
            picture: res.data.picture
          };
          dispatch(inf(info))
        }
      );
  }
}

export const getMessages = () => {
  return (dispatch) => {
    axios.get('http://192.168.0.112:8124/get_messages')
      .then(
        // (res) => {
        //   res.data.messages.forEach(e => {
        //     dispatch(write(e));
        //   })
        // }
      )
  }
}

export const getRooms = () => {
  return (dispatch) => {
    axios.post('http://192.168.0.112:8124/rooms', { email: 'vladissqq@gmail.com' })
      .then(
        //Addd ASYNC STORAGE!!!!!
        (res) => {
          dispatch(roomAction(res.data))
        }
      )
  }
}