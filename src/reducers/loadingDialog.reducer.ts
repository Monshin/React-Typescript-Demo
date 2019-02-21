import {
  LOADING_DIALOG_CLOSE,
  LOADING_DIALOG_SHOW,
} from '../constants/ActionTypes';
import { Action, State } from '../types/loadingDialog.type.js';

const model: State = {
  status: true,
};

const loadingDialogReducer = (state: State = model, action: Action): State => {
  switch (action.type) {
    case LOADING_DIALOG_SHOW:
      return {
        ...state,
        status: true,
      };

    case LOADING_DIALOG_CLOSE:
      return {
        ...state,
        status: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default loadingDialogReducer;
