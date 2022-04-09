import { UserProps } from '../../types/userTypes';
import { ActionUserTypes } from '../../types/actionsTypes';

export function setUser(user: UserProps) {
  return {
    type: ActionUserTypes.setUser,
    payload: {
      user,
    },
  };
}

export function deleteUser() {
  return {
    type: ActionUserTypes.deleteUser,
    payload: {},
  };
}
