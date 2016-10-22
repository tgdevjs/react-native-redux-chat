import { UPDATE_NAME, UPDATE_ACCOUNT_NUMBER } from './types';

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    name,
  }
}

export function updateAccountNumber (number) {
  return {
    type: UPDATE_ACCOUNT_NUMBER,
    number,
  }
}
