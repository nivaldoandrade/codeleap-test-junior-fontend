import { AnyAction } from 'redux';
import { ActionUserTypes } from '../../../types/actionsTypes';
import { UserState } from '../../../types/userTypes';

const INITIAL_STATE: UserState = {
  user: {
    name: '',
  },
};

function userReducer(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case ActionUserTypes.setUser:
      const { user } = action.payload;

      return {
        ...state,
        user: {
          name: user.name,
        },
      };

    case ActionUserTypes.deleteUser:
      return {
        ...state,
        user: {
          name: '',
        },
      };

    default:
      return state;
  }
}

export default userReducer;
