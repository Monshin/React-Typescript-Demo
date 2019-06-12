import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { appBarHeight } from './Header.style';
import { sideMenuWidth } from './SideMenu.style';

const pageMarginAppBar = 30;

const LayoutStyles = (theme: Theme) =>
  createStyles({
    page: {
      width: '100%',
      margin: 'auto',
      position: 'relative',
      top: appBarHeight + pageMarginAppBar,
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
      [theme.breakpoints.down('xs')]: {
        top: 80
      }
    },
    content: {
      flexGrow: 1,
      minWidth: 0,
      maxWidth: `calc(100% - ${sideMenuWidth + 20}px)`,
      marginLeft: 20,
      marginBottom: pageMarginAppBar,
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        minWidth: '100%',
        maxWidth: '100%'
      }
    },
    contentWithOutSidemenu: {
      maxWidth: '100%'
    }
  });

export default LayoutStyles;
export { pageMarginAppBar };
