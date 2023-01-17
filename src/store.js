import { createStore } from 'redux';

// state
const initialState = {
  isLogged: false,
  token: '',
  firstName: '',
  lastName: '',
};

// actions creators
export const login = (token) => ({ type: 'login', token });

export const logout = () => ({ type: 'logout' });

export const updateFirstName = (firstName) => ({
  type: 'updateFirstName',
  firstName,
});

export const updateLastName = (lastName) => ({
  type: 'updateLastName',
  lastName,
});

function reducer(state = initialState, action = null) {
  console.log(action.type); // TODO à supprimer
  if (action.type === 'login') {
    return {
      ...state,
      isLogged: true,
      token: action.token,
    };
  }

  if (action.type === 'logout') {
    return {
      ...state,
      isLogged: false,
    };
  }

  if (action.type === 'updateFirstName') {
    return {
      ...state,
      firstName: action.firstName,
    };
  }

  if (action.type === 'updateLastName') {
    return {
      ...state,
      lastName: action.lastName,
    };
  }

  return state;
}

export const store = createStore(reducer);
