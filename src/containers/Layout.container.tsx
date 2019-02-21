import React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { RouteComponentProps } from 'react-router';
import { Route, Switch, withRouter } from 'react-router-dom';

// import HeaderComponent from '../components/layout/Header.component';
// import SideMenuComponent from '../components/layout/Sidemenu.component';
import Home from './Home.container';
// import Login from './Login.container';
// import NotFound from './NotFound.container';
// import CommingSoon from '../components/CommingSoon.component';
import LayoutStyles from '../style/layout/Layout.style';

interface OwnProps {}

type Props = OwnProps &
  RouteComponentProps<{}> &
  WithStyles<typeof LayoutStyles>;

const Layout: React.SFC<Props> = ({ classes }) => {
  return (
    <>
      {/* <HeaderComponent
        userData={userData}
        onLogout={onLogout}
        onDrawerOpen={onDrawerOpen}
        unread={unread}
        pathname={pathname}
      /> */}
      <div className={classes.page}>
        {/* <SideMenuComponent
          userData={userData}
          sidemenu={sidemenu}
          onDrawerClose={onDrawerClose}
        /> */}
        <main className={classes.content}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Home} />
          </Switch>
        </main>
      </div>
    </>
  );
};

const LayoutContainer = withStyles(LayoutStyles, { withTheme: true })(Layout);

export default withRouter(LayoutContainer);
