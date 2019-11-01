import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const appBarHeight = 72;

const HeaderStyles = (theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: '#ffffff',
      position: 'fixed',
      top: 0,
      zIndex: theme.zIndex.drawer + 1,
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.12)',
      [theme.breakpoints.up('sm')]: {
        minHeight: appBarHeight,
      },
    },
    toolbar: {
      [theme.breakpoints.up(600)]: {
        minHeight: appBarHeight,
      },
    },
    appBarContent: {
      flexGrow: 1,
      display: 'inline-flex',
      justifyContent: 'center',
    },
    sideMenuIcon: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  });

export default HeaderStyles;
export { appBarHeight };
