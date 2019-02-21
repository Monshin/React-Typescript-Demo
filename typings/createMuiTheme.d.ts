import { Theme } from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    fontFamily: React.CSSProperties['fontFamily']
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    fontFamily: React.CSSProperties['fontFamily']
  }
}