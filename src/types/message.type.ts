import { MESSAGE_SHOW, MESSAGE_CLOSE, MESSAGE_SHOW_AJAX_ERROR } from '../constants/ActionTypes';

export type MessageVariantType = 'success' | 'warning' | 'error' | 'info';

interface ShowAction {
  type: typeof MESSAGE_SHOW;
  text: string;
  variant?: MessageVariantType;
}
interface CloseAction {
  type: typeof MESSAGE_CLOSE;
}
interface ShowAjaxErrorAction {
  type: typeof MESSAGE_SHOW_AJAX_ERROR;
  error: XMLHttpRequest;
}

export type Action = ShowAction | CloseAction | ShowAjaxErrorAction;

export interface State {
  text: null | string;
  status: boolean;
  variant: MessageVariantType;
}
