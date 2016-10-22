import { combineReducers } from 'redux';
import { UPDATE_NAME, UPDATE_ACCOUNT_NUMBER } from '../actions/types';

function name(state = '', action ) {
  switch (action.type) {
    case UPDATE_NAME:
      return action.name;
    default:
      return state;
  }
}

function accountNumber(state = '', action ) {
  switch (action.type) {
    case UPDATE_ACCOUNT_NUMBER:
      return action.number;
    default:
      return state;
  }
}


const chatReducers = combineReducers({
  name,
  accountNumber,
});

export default chatReducers;
