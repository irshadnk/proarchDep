import userConstants from '../constants/user.constants';

let loggedInuser = JSON.parse(localStorage.getItem('user'));
const firstState = loggedInuser ? { isloggedIn: true, loggedInuser } : {};

export function user(state = firstState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS: 
      console.log('ction ---', action)
      localStorage.setItem('user', JSON.stringify(action.user));
      return {
        ...state,
        isloggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        isloggedIn: false,
      };
    case userConstants.LOGIN_CHECK:
      return state;
    case userConstants.GET_DET_SUCCESS:
      return {
        ...state,
        grid_list: action.grids.data
      };
    
    
    default:
      return state;
  }
}
