import { RouterState } from 'react-router-redux';
import { FormStateMap } from 'redux-form';

import { State as MessageState } from './message.type';
import { State as LoadingDialogState } from './loadingDialog.type';

export default interface ReducerState {
  messageReducer: MessageState;
  loadingDialogReducer: LoadingDialogState;

  form: FormStateMap;
  routing: RouterState;
}
