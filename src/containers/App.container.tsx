import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

import { messageClose } from '../actions/message.action';
import { loadingDialogClose } from '../actions/loadingDialog.action';

import Message from '../components/Message.component';
import LoadingDialog from '../components/LoadingDialog.component';
import Layout from './Layout.container';

import ReducerState from '../types/Redux.type';
import { State as MessageState } from '../types/message.type';
import { State as LoadingDialogState } from '../types/loadingDialog.type';

interface StateProps {
  message: MessageState;
  loadingDialog: LoadingDialogState;
}

interface ActionProps {
  messageClose: typeof messageClose;
  loadingDialogClose: typeof loadingDialogClose;
}

type Props = StateProps & ActionProps & RouteComponentProps<{}>;

class App extends React.Component<Props> {
  componentWillMount() {
    const { loadingDialogClose } = this.props;
    loadingDialogClose();
  }

  handelMessageClose = () => {
    const { messageClose } = this.props;
    messageClose();
  };

  render() {
    const { message, loadingDialog } = this.props;

    return (
      <>
        <Layout />
        <Message message={message} onMessageClose={this.handelMessageClose} />
        <LoadingDialog loadingDialog={loadingDialog} />
      </>
    );
  }
}

export default withRouter(connect<StateProps, ActionProps, {}, ReducerState>(
  ({ messageReducer, loadingDialogReducer }) => ({
    message: messageReducer,
    loadingDialog: loadingDialogReducer
  }),
  {
    messageClose,
    loadingDialogClose
  }
)(App));
