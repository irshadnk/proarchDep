import { combineReducers } from 'redux';
import { alert } from './alert.reducer';
import { user } from './user.reducer';

const rootReducer = combineReducers({
  	alert,
  	user,
});

export default rootReducer;