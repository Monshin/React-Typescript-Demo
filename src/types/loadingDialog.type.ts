import { LOADING_DIALOG_SHOW, LOADING_DIALOG_CLOSE } from '../constants/ActionTypes';

interface ShowAction {
  type: typeof LOADING_DIALOG_SHOW;
}
interface CloseAction {
  type: typeof LOADING_DIALOG_CLOSE;
}

export type Action = ShowAction | CloseAction;

export interface State {
  status: boolean;
}
