import { createStore } from 'redux';

// state
const initialState = {
  isLogged: false,
};

// actions creators
export const login = () => ({ type: 'login' });
export const logout = () => ({ type: 'logout' });

function reducer(state = initialState, action = null) {
  if (action.type === 'login') {
    return {
      ...state,
      isLogged: true,
    };
  }

  if (action.type === 'logout') {
    return {
      ...state,
      isLogged: false,
    };
  }

  return state;
}

export const store = createStore(reducer);
