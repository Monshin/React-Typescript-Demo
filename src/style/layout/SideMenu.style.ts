import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import { pageMarginAppBar } from './Layout.style';
import { appBarHeight } from './Header.style';

const sideMenuWidth = 160;

const LayoutStyles = (theme: Theme) =>
  createStyles({
    sideMenuWapper: {
      width: sideMenuWidth,
      backgroundColor: '#ffffff',
      position: 'sticky',
      top: appBarHeight + pageMarginAppBar,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    sideMenuPaper: {
      width: sideMenuWidth
    },
    sideMenuText: {
      padding: 0,
      color: '#4a4a4a',
      fontSize: 14
    },
    sideMenuTextSelected: {
      color: '#000000',
      fontSize: 16,
      fontWeight: 500
    },
    drawerPaper: {
      width: sideMenuWidth
    },
    drawerCloseButton: {
      borderRadius: 0
    },
    link: {
      display: 'block',
      textDecoration: 'none'
    }
  });

export default LayoutStyles;
export { sideMenuWidth };
