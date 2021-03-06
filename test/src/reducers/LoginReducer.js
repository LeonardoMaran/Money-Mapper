import {
  LOGIN_FORM_UPDATE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT,
} from '../actions/types';

// const INITIAL_STATE = {
//   email: '',
//   password: '',
//   user: null,
//   loading: false
// };

const INITIAL_STATE = {
  email: 'Tom@gmail.com',
  password: 'yes',
  user: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case LOGOUT:
        return { ...state,
            email: '',
            password: '',
            loading: false
        }

    case LOGIN_FORM_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value}

    case LOGIN_USER:
      return { ...state, loading: true, error: '' };

    case LOGIN_USER_SUCCESS:
      return { ...state,
          user: action.payload,
          error: '',
          loading: false,
          email: '',
          password: ''
      };

    case LOGIN_USER_FAIL:
      return { ...state,
          error: 'Authentication Failed.',
          password: '',
          loading: false
      };

    default:
      return state;
  }
};
