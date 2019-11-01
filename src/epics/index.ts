import { combineEpics } from 'redux-observable';

import postEpics from './post.epic';

export default combineEpics(
  // 文章相關
  postEpics.postGetList,
);
