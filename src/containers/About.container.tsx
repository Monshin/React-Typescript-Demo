import React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import MainContentStyles from '../style/layout/MainContent.style';

type Props = WithStyles<typeof MainContentStyles>;

class About extends React.Component<Props> {
  componentDidMount() {}

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.fullContent}>關於</div>
      </div>
    );
  }
}

export default withStyles(MainContentStyles)(About);
