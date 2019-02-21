import {
  MESSAGE_CLOSE,
  MESSAGE_SHOW,
  MESSAGE_SHOW_AJAX_ERROR
} from '../constants/ActionTypes';
import { Action, State } from '../types/message.type.js';

const model: State = {
  text: null,
  status: false,
  variant: 'error'
};

const messageReducer = (state: State = model, action: Action): State => {
  switch (action.type) {
    case MESSAGE_CLOSE:
      return {
        ...state,
        status: false,
        text: null
        // variant: 'error',
      };

    case MESSAGE_SHOW:
      return {
        ...state,
        status: true,
        text: action.text,
        variant: action.variant || 'error'
      };

    case MESSAGE_SHOW_AJAX_ERROR: {
      const errorRes = action.error.response;
      let messageText;
      if (errorRes && errorRes.code) {
        if (errorRes.message.length > 1) {
          messageText = errorRes.code + ': ' + errorRes.message;
        } else if (errorRes.code === 405) {
          messageText = errorRes.code + ': 無此功能';
        } else {
          messageText = errorRes.code + ': 系統發生錯誤';
        }
      } else {
        messageText = '系統發生錯誤';
      }
      return {
        ...state,
        status: true,
        text: messageText,
        variant: 'error'
      };
    }

    default:
      return {
        ...state
      };
  }
};

export default messageReducer;
