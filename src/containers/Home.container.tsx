import React from 'react';
// import Debug from 'debug';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import { postClearList, postGetList } from '../actions/post.action';

import MainContentStyles from '../style/layout/MainContent.style';
// import config from '../../config/config';

import ReducerState from '../types/Redux.type';
import { State as PostState } from '../types/post.type';

// const debug = Debug(`${config.PROJECT_NAME}:Home.container`);

interface StateProps {
  postDatas: PostState['datas'];
  postNeedMore: PostState['needMore'];
}

interface ActionProps {
  postClearList: typeof postClearList;
  postGetList: typeof postGetList;
}

type Props = StateProps &
  ActionProps &
  RouteComponentProps<{}> &
  WithStyles<typeof MainContentStyles>;

class Home extends React.Component<Props> {
  componentDidMount() {
    const { postClearList } = this.props;
    postClearList();
    this.handleLoadMoreList();
  }

  componentWillUnmount() {
    const { postClearList } = this.props;
    postClearList();
  }

  handleLoadMoreList = () => {
    const { postGetList } = this.props;
    postGetList({});
  };

  render() {
    const { classes, postDatas } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.fullContent}>
          {postDatas.map((item) => (
            <Card key={item.id}>
              <CardHeader title={item.title} />
              <CardContent>{item.body}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

const HomeContainer = withRouter(
  connect<StateProps, ActionProps, {}, ReducerState>(
    ({ postReducer }) => ({
      postDatas: postReducer.datas,
      postNeedMore: postReducer.needMore,
    }),
    {
      postClearList,
      postGetList,
    },
  )(Home),
);

export default withStyles(MainContentStyles)(HomeContainer);
