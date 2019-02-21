import React from 'react';
import classNames from 'classnames';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';

import messageStyle from '../style/Message.style';

import { State as MessageState } from '../types/message.type';

interface OwnProps {
  message: MessageState;
  onMessageClose: () => void;
}

type Props = OwnProps & WithStyles<typeof messageStyle>;

const Message: React.SFC<Props> = ({ classes, message, onMessageClose }) => {
  const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon
  };
  const Icon = variantIcon[message.variant || 'error'];

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      open={message.status}
      autoHideDuration={1500}
      onClose={onMessageClose}
    >
      <SnackbarContent
        className={classNames(classes[message.variant])}
        message={[
          <span key="message" id="client-snackbar" className={classes.message}>
            <Icon
              key="icon"
              className={classNames(classes.icon, classes.iconVariant)}
            />
            {message.text === null ? '' : message.text}
          </span>
        ]}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={onMessageClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
};

export default withStyles(messageStyle)(Message);
