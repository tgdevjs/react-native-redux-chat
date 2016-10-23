import { combineReducers } from 'redux';
import {
  UPDATE_NAME,
  UPDATE_ACCOUNT_NUMBER,
  UPDATE_COMPOSE_MESSAGE,
  SEND_MESSAGE,
  RECEIVED_MESSAGE,
} from '../actions/types';

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

function composingMessage(state = '', action) {
  switch (action.type) {
    case UPDATE_COMPOSE_MESSAGE:
      return action.message;
    case SEND_MESSAGE:
      return '';
    default:
      return state;
  }
}

function messages(state = [], action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return [
        ...state,
        { message: action.message,
          timestamp: action.timestamp,
          isOwnMessage: true,
        }
      ]
    case RECEIVED_MESSAGE:
      return [
        ...state,
        action.message,
      ]
    default:
      return state;
  }
}


const chatReducers = combineReducers({
  name,
  accountNumber,
  composingMessage,
  messages,
});

export default chatReducers;
