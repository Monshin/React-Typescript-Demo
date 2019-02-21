import {
  POST_CLEAR_LIST,
  POST_GET_LIST,
  POST_RECEIVE_LIST,
  POST_SET_LIST_LOADING
} from '../constants/ActionTypes';
import PostModel from '../models/PostModel';

interface ClearAction {
  type: typeof POST_CLEAR_LIST;
}

export interface GetListAction {
  type: typeof POST_GET_LIST;
  filter: Object;
  callback?: CallbackFuncType;
}

interface ReceiveListAction {
  type: typeof POST_RECEIVE_LIST;
  datas: Array<PostModel>;
}

interface SetListLoadingAction {
  type: typeof POST_SET_LIST_LOADING;
  isLoading: boolean;
}

export type Action =
  | ClearAction
  | GetListAction
  | ReceiveListAction
  | SetListLoadingAction;

export interface State {
  datas: Array<PostModel>; // 文章列表
  needMore: boolean;
  isLoading: boolean;
}
