import React from 'react';
// import Debug from 'debug';
import classNames from 'classnames';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';

import { sidemenuClose, sidemenuChange } from '../../actions/sidemenu.action';

import SideMenuMain from '../sidemenu/sidemenu.main.component';
import SideMenuStyle from '../../style/layout/SideMenu.style';

import ReducerState from '../../types/Redux.type';
import { State as SideemnuState } from '../../types/sidemenu.type';

// const debug = Debug(`${_CONFIG_.PROJECT_NAME}:Sidemenu.component`);

interface StateProps {
  sidemenu: SideemnuState;
  // pathname: string;
}

interface ActionProps {
  sidemenuClose: typeof sidemenuClose;
  sidemenuChange: typeof sidemenuChange;
}

type Props = StateProps & ActionProps & WithStyles<typeof SideMenuStyle>;

class SideMenuPartial extends React.Component<Props> {
  componentDidMount() {
    this.handleCheckSideMenuContent();
  }

  handleCheckSideMenuContent = () => {
    const { sidemenu, sidemenuChange } = this.props;
    if (sidemenu.content !== 'main') {
      sidemenuChange('main');
    }
  };

  handleDrawerClose = () => {
    const { sidemenuClose } = this.props;
    sidemenuClose();
  };

  render() {
    const { classes, sidemenu } = this.props;

    let MenuListContent: React.ReactNode = (
      <div className="hidden">
        <SideMenuMain />
      </div>
    );
    switch (sidemenu.content) {
      case 'main':
      default:
        MenuListContent = <SideMenuMain />;
        break;
    }

    return (
      <div className={classNames(classes.sideMenuWapper)}>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            open={sidemenu.status}
            className={classes.drawerPaper}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <IconButton className={classes.drawerCloseButton} onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
            <Divider />
            {MenuListContent}
          </Drawer>
        </Hidden>
        <List disablePadding>{MenuListContent}</List>
      </div>
    );
  }
}

const SideMenuRedux = connect<StateProps, ActionProps, {}, ReducerState>(
  ({ sidemenuReducer }) => ({
    sidemenu: sidemenuReducer,
    // pathname: routing.location.pathname
  }),
  {
    sidemenuClose,
    sidemenuChange
  }
)(SideMenuPartial);

export default withStyles(SideMenuStyle)(SideMenuRedux);
