import userConstants from '../constants/user.constants';
import userService from '../service/user.service';
import alertActions  from './alert.actions'
import { history } from '../helpers';


const getSkillsandCountry = user => (dispatch) => {
  console.log('userActions login');
  dispatch(request());
  userService.getSkillsandCountry()
  .then(
    grids => { 
      dispatch(success(grids));
    },
    error => {
      dispatch(failure(error.toString()));
    }
  );
  function request() { return { type: userConstants.GET_DET_REQUEST } }
  function success(grids) { return { type: userConstants.GET_DET_SUCCESS, grids } }
  function failure(error) { return { type: userConstants.GET_DET_FAILURE, error } }
};


const login = user => (dispatch) => {
  console.log('userActions login');
  dispatch(request(user));
  userService.login(user)
  .then(
    user => { 
      dispatch(success(user));
      history.push('/home');
      dispatch(alertActions.success('Login successful'));
    },
    error => {
      dispatch(failure(error.toString()));
      dispatch(alertActions.error(error.toString()));
    }
  );
  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
};

const logout = () => (dispatch) => {
  console.log('here logout function works');
  localStorage.removeItem('user');
  history.push('/login');
  return { type: userConstants.LOGIN_FAILURE };
};

const register = user => (dispatch) => {
  console.log('userActions registeruser');
  dispatch(request(user));
  userService.registeruser(user)
  .then(
    user => { 
      dispatch(success(user));
      history.push('/login');
      dispatch(alertActions.success('Registration successful'));
    },
    error => {
      dispatch(failure(error.toString()));
      dispatch(alertActions.error(error.toString()));
    }
  );
  function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
};

export default { login, logout, register, getSkillsandCountry  };