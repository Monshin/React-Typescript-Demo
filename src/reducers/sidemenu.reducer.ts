import {
  SIDEMENU_CLOSE,
  SIDEMENU_SHOW,
  SIDEMENU_CHANGE,
} from '../constants/ActionTypes';
import { Action, State } from '../types/sidemenu.type';

const model: State = {
  status: false,
  content: ''
};

const sidemenuReducer = (state: State = model, action: Action): State => {
  switch (action.type) {
    case SIDEMENU_CLOSE:
      return {
        ...state,
        status: false
      };

    case SIDEMENU_SHOW:
      return {
        ...state,
        status: true
      };

    case SIDEMENU_CHANGE: 
      return {
        ...state,
        content: action.content
      }

    default:
      return {
        ...state,
      };
  }
};

export default sidemenuReducer;
