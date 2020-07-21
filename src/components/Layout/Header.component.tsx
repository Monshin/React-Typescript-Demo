import React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { sidemenuShow } from '../../actions/sidemenu.action';

import HeaderStyle from '../../style/layout/Header.style';

interface StateProps {}

interface ActionProps {
  sidemenuShow: typeof sidemenuShow;
}

type Props = StateProps & ActionProps & WithStyles<typeof HeaderStyle>;

class HeaderPartial extends React.Component<Props> {
  handleDrawerOpen = () => {
    const { sidemenuShow } = this.props;
    sidemenuShow();
  };

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton onClick={this.handleDrawerOpen} className={classes.sideMenuIcon}>
            <MenuIcon />
          </IconButton>
          <Link to="/">React Typescript Demo</Link>
          <div className={classes.appBarContent} />
          <div>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

const HeaderRedux = connect<StateProps, ActionProps, {}>(
  null,
  { sidemenuShow },
)(HeaderPartial);

export default withStyles(HeaderStyle)(HeaderRedux);
