import { of, empty, merge } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, catchError } from 'rxjs/operators';
import { Epic } from 'redux-observable';
// import queryString from 'query-string';

import config from '../config/config';
import * as ActionTypes from '../constants/ActionTypes';
import * as postActions from '../actions/post.action';
import * as loadingDialogActions from '../actions/loadingDialog.action';
import * as messageActions from '../actions/message.action';

import ReducerState from '../types/Redux.type';
import { Action as PostActionType, GetListAction } from '../types/post.type';
import { Action as LoadingDialogActionType } from '../types/loadingDialog.type';
import { Action as MessageActionType } from '../types/message.type';

type OutputActionType = PostActionType | MessageActionType | LoadingDialogActionType;

const postGetList: Epic<OutputActionType, OutputActionType, ReducerState> = (action$, store$) =>
  action$.ofType<GetListAction>(ActionTypes.POST_GET_LIST).pipe(
    mergeMap(({ filter, callback }) => {
      if (store$.value.postReducer.isLoading) {
        return empty();
      }
      return merge(
        of(loadingDialogActions.loadingDialogShow(), postActions.postSetListLoading(true)),
        ajax
          .get(`${config.API_URL}/posts`, {
            'Content-Type': 'application/json',
          })
          .pipe(
            mergeMap((response) => {
              console.log(response);
              if (response.status === 200) {
                const responseData = response.response;
                if (callback && typeof callback === 'function') callback(null, responseData);
                return of(
                  postActions.postSetListLoading(false),
                  postActions.postReceiveList(responseData),
                  messageActions.messageShow('OK', 'info'),
                  loadingDialogActions.loadingDialogClose(),
                );
              }
              return of(
                postActions.postSetListLoading(false),
                messageActions.messageShow('發生錯誤', 'error'),
                loadingDialogActions.loadingDialogClose(),
              );
            }),
            catchError((error) => {
              console.log('posts', error);
              if (callback && typeof callback === 'function') callback(error);
              return of(
                postActions.postSetListLoading(false),
                messageActions.messageShowAjaxError(error),
                loadingDialogActions.loadingDialogClose(),
              );
            }),
          ),
      );
    }),
  );

export default {
  postGetList,
};
