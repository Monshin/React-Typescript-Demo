import { SIDEMENU_SHOW, SIDEMENU_CLOSE, SIDEMENU_CHANGE } from '../constants/ActionTypes';
import { Action, SideMenuContentType } from '../types/sidemenu.type';

/**
 *  顯示側邊Menu
 */
const sidemenuShow = (): Action => ({
  type: SIDEMENU_SHOW
});

/**
 * 關閉側邊Menu
 */
const sidemenuClose = (): Action => ({
  type: SIDEMENU_CLOSE
});

/**
 * 切換側邊Menu
 * @param content 側邊Menu套用內容
 */
const sidemenuChange = (content: SideMenuContentType): Action => ({
  type: SIDEMENU_CHANGE,
  content
});

export { sidemenuShow, sidemenuClose, sidemenuChange };
