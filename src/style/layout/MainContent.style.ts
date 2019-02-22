import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { pageMaxWidth, pageMarginAppBar } from './Layout.style';
// import { appBarHeight } from './Header.style';

const appBarHeight = 0;
const sideContentWidth = 264;

const MainContentStyle = (theme: Theme) => createStyles({
  container: {
    width: '100%',
    // height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexDirection: 'row',
    [theme.breakpoints.down(800)]: {
      flexDirection: 'column',
    },
  },
  containerReverse: {
    flexDirection: 'row-reverse',
    [theme.breakpoints.down(800)]: {
      flexDirection: 'column',
    },
  },
  containerHeader: {
    zIndex: theme.zIndex.drawer - 1,
  },
  sideContent: {
    width: sideContentWidth,
    minWidth: sideContentWidth,
    // height: 285,
    position: 'sticky',
    top: appBarHeight + pageMarginAppBar,
    [theme.breakpoints.down(800)]: {
      width: '100%',
      position: 'relative',
      top: 0,
      marginBottom: pageMarginAppBar,
    },
  },
  mainContent: {
    flexGrow: 1,
    minWidth: 320,
    maxWidth: `calc(100% - ${sideContentWidth + 20}px)`,
    marginRight: 20,
    [theme.breakpoints.up(pageMaxWidth)]: {
      maxWidth: pageMaxWidth - sideContentWidth - 20,
    },
    [theme.breakpoints.down(800)]: {
      marginRight: 0,
      minWidth: '100%',
      maxWidth: '100%',
    },
  },
  fullContent: {
    width: '100%',
  }
});

export default MainContentStyle;