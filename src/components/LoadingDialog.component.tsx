import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';

import { State as loadingDialogState } from '../types/loadingDialog.type';

interface Props {
  loadingDialog: loadingDialogState;
}

const LoadingDialog: React.SFC<Props> = ({ loadingDialog }) => {
  return (
    <Dialog open={loadingDialog.status} aria-labelledby="loading-dialog-title">
      <DialogContent>
        <CircularProgress />
      </DialogContent>
    </Dialog>
  );
};

export default LoadingDialog;
