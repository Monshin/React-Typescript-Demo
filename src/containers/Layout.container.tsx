import React from 'react';
import classNames from 'classnames';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Route, RouteProps, RouteComponentProps, Switch, withRouter } from 'react-router';

import HeaderComponent from '../components/Layout/Header.component';
import SideMenuComponent from '../components/Layout/Sidemenu.component';
import Home from './Home.container';
import About from './About.container';
import NotFound from './NotFound.container';
import LayoutStyles from '../style/layout/Layout.style';

interface MyRouteProps extends RouteProps {
  key: React.ReactText;
}

type Props = RouteComponentProps & WithStyles<typeof LayoutStyles>;

const Layout: React.SFC<Props> = ({ classes }) => {
  const routeList: Array<MyRouteProps> = [
    {
      key: 'Home',
      exact: true,
      path: '/',
      component: Home,
    },
    {
      key: 'About',
      path: '/about',
      component: About,
    },
    {
      key: 'NotFound',
      component: NotFound,
    },
  ];

  return (
    <>
      <HeaderComponent />
      <div className={classes.page}>
        <SideMenuComponent />
        <main className={classNames(classes.content)}>
          <Switch>
            {routeList.map(({ key, ...props }) => (
              <Route key={key} {...props} />
            ))}
          </Switch>
        </main>
      </div>
    </>
  );
};

export default withStyles(LayoutStyles)(withRouter(Layout));
