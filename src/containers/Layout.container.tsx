import React from 'react';
import classNames from 'classnames';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { RouteComponentProps } from 'react-router';
import { Route, RouteProps, Switch, withRouter } from 'react-router-dom';

import HeaderComponent from '../components/Layout/Header.component';
import SideMenuComponent from '../components/Layout/Sidemenu.component';
import Home from './Home.container';
import About from './About.container';
import NotFound from './NotFound.container';
import LayoutStyles from '../style/layout/Layout.style';

interface OwnProps {}

type Props = OwnProps & RouteComponentProps<{}> & WithStyles<typeof LayoutStyles>;

const Layout: React.SFC<Props> = ({ classes }) => {
  let routeList: Array<RouteProps> = [];

  routeList.push(
    {
      exact: true,
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      component: NotFound
    }
  );

  return (
    <>
      <HeaderComponent />
      <div className={classes.page}>
        <SideMenuComponent />
        <main className={classNames(classes.content)}>
          <Switch>
            {routeList.map(props => (
              <Route key={(props.path as string) || 'AllRoute'} {...props} />
            ))}
          </Switch>
        </main>
      </div>
    </>
  );
};

const LayoutContainer = withStyles(LayoutStyles)(Layout);

export default withRouter(LayoutContainer);
