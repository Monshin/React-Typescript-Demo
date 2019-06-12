import React from 'react';
// import Debug from 'debug';
import classNames from 'classnames';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { sidemenuClose } from '../../actions/sidemenu.action';

import SideMenuStyle from '../../style/layout/SideMenu.style';

import ReducerState from '../../types/Redux.type';

// const debug = Debug(`${_CONFIG_.PROJECT_NAME}:sidemenu.main.component`);

interface SideMenuItemType {
  text: React.ReactNode;
  link: string;
  selected: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

interface StateProps {
  pathname: string;
}

interface ActionProps {
  sidemenuClose: typeof sidemenuClose;
}

type Props = StateProps & ActionProps & WithStyles<typeof SideMenuStyle>;

class SideMenuMain extends React.Component<Props> {
  handleDrawerClose = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { sidemenuClose } = this.props;
    sidemenuClose();
  };

  render() {
    const { classes, pathname } = this.props;

    let SideMenuList: Array<SideMenuItemType> = [
      {
        text: '首頁',
        link: '/',
        selected: pathname === '/'
      },
      {
        text: '關於',
        link: '/about',
        selected: pathname.toLowerCase().startsWith('/about')
      }
    ];

    return (
      <>
        {SideMenuList.map(item => (
          <Link key={item.link} className={classes.link} to={item.link}>
            <ListItem
              key={item.link}
              selected={item.selected}
              onClick={event => {
                this.handleDrawerClose(event);
                if (item.onClick) {
                  item.onClick(event);
                }
              }}
              button
            >
              <ListItemText
                className={classNames(classes.sideMenuText, {
                  [classes.sideMenuTextSelected]: item.selected
                })}
                disableTypography
                primary={item.text}
              />
            </ListItem>
          </Link>
        ))}
      </>
    );
  }
}

export default connect<StateProps, ActionProps, {}, ReducerState>(
  ({ router }) => ({
    pathname: router.location.pathname
  }),
  { sidemenuClose }
)(withStyles(SideMenuStyle)(SideMenuMain));
