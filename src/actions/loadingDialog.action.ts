// @flow
import { LOADING_DIALOG_SHOW, LOADING_DIALOG_CLOSE } from '../constants/ActionTypes';
import { Action } from '../types/loadingDialog.type';

/**
 *  顯示系統訊息
 *
 */
const loadingDialogShow = (): Action => ({
  type: LOADING_DIALOG_SHOW,
});

/**
 * 關閉訊息視窗
 *
 */
const loadingDialogClose = (): Action => ({
  type: LOADING_DIALOG_CLOSE,
});

export { loadingDialogShow, loadingDialogClose };
