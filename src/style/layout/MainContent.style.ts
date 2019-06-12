import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { pageMarginAppBar } from './Layout.style';
import { appBarHeight } from './Header.style';

const sideContentWidth = 300;

const mainContentStyle = (theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
      flexDirection: 'row',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      }
    },
    containerReverse: {
      flexDirection: 'row-reverse',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      }
    },
    containerHeader: {
      zIndex: theme.zIndex.drawer - 2
    },
    sideContent: {
      width: sideContentWidth,
      minWidth: sideContentWidth,
      position: 'sticky',
      top: appBarHeight + pageMarginAppBar,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        position: 'relative',
        top: 0,
        marginBottom: pageMarginAppBar
      }
    },
    mainContent: {
      flexGrow: 1,
      minWidth: 320,
      maxWidth: `calc(100% - ${sideContentWidth + 16}px)`,
      marginRight: 16,
      [theme.breakpoints.down('sm')]: {
        marginRight: 0,
        minWidth: '100%',
        maxWidth: '100%'
      }
    },
    fullContent: {
      width: '100%'
    }
  });

export default mainContentStyle;
