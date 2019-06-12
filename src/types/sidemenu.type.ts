import { SIDEMENU_SHOW, SIDEMENU_CLOSE, SIDEMENU_CHANGE } from '../constants/ActionTypes';

export type SideMenuContentType = '' | 'main';

interface ShowAction {
  type: typeof SIDEMENU_SHOW;
}
interface CloseAction {
  type: typeof SIDEMENU_CLOSE;
}
interface ChangeAction {
  type: typeof SIDEMENU_CHANGE;
  content: SideMenuContentType;
}

export type Action = ShowAction | CloseAction | ChangeAction;

export type State = {
  status: boolean;
  content: SideMenuContentType;
};
