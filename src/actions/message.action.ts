import {
  MESSAGE_SHOW,
  MESSAGE_CLOSE,
  MESSAGE_SHOW_AJAX_ERROR
} from '../constants/ActionTypes';
import { Action, MessageVariantType } from '../types/message.type';

/**
 * 顯示系統訊息
 * @param messageText 訊息
 * @param variant
 */
const messageShow = (text: string, variant?: MessageVariantType): Action => ({
  type: MESSAGE_SHOW,
  text,
  variant
});

/**
 * 關閉訊息視窗
 */
const messageClose = (): Action => ({
  type: MESSAGE_CLOSE
});

/**
 * 顯示AJAX錯誤訊息
 * @param error 回傳的錯誤
 */
const messageShowAjaxError = (error: XMLHttpRequest): Action => ({
  type: MESSAGE_SHOW_AJAX_ERROR,
  error
});

export { messageShow, messageClose, messageShowAjaxError };
