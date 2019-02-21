import {
  POST_CLEAR_LIST,
  POST_GET_LIST,
  POST_RECEIVE_LIST,
  POST_SET_LIST_LOADING
} from '../constants/ActionTypes';
import { Action } from '../types/post.type';
import PostModel from '../models/PostModel';

/**
 * 文章列表清空
 */
const postClearList = (): Action => ({
  type: POST_CLEAR_LIST
});

/**
 * 請求文章列表
 * @param filter 過濾條件
 * @param callback 完成後動作
 */
const postGetList = (filter: Object, callback?: CallbackFuncType): Action => ({
  type: POST_GET_LIST,
  filter,
  callback
});

/**
 * 文章列表取得
 * @param datas 文章列表資料
 */
const postReceiveList = (datas: Array<PostModel>): Action => ({
  type: POST_RECEIVE_LIST,
  datas
});

/**
 * 設定文章列表是否請求中
 * @param isLoading 是否請求中
 */
const postSetListLoading = (isLoading: boolean): Action => ({
  type: POST_SET_LIST_LOADING,
  isLoading
});

export { postClearList, postGetList, postReceiveList, postSetListLoading };
