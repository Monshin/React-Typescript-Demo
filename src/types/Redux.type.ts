import { RouterState } from 'connected-react-router';
import { FormStateMap } from 'redux-form';

import { State as MessageState } from './message.type';
import { State as SidemenuState } from './sidemenu.type';
import { State as LoadingDialogState } from './loadingDialog.type';
import { State as PostState } from './post.type';

export default interface ReducerState {
  messageReducer: MessageState;
  sidemenuReducer: SidemenuState;
  loadingDialogReducer: LoadingDialogState;
  postReducer: PostState;

  form: FormStateMap;
  router: RouterState;
}
