import {
  POST_CLEAR_LIST,
  POST_RECEIVE_LIST,
  POST_SET_LIST_LOADING,
} from '../constants/ActionTypes';
import { Action, State } from '../types/post.type';

const model: State = {
  datas: [], // 文章列表
  needMore: true,
  isLoading: false,
};

const postReducer = (state = model, action: Action): State => {
  switch (action.type) {
    case POST_CLEAR_LIST:
      return {
        ...state,
        datas: [],
        needMore: true,
      };

    case POST_RECEIVE_LIST:
      return {
        ...state,
        datas: [...state.datas, ...action.datas],
        needMore: action.datas.length !== 0,
      };

    case POST_SET_LIST_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return {
        ...state,
      };
  }
};

export default postReducer;
