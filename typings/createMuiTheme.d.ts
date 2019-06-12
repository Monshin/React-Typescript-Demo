import { Theme } from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    fontSize: {
      default: React.CSSProperties['fontSize'];
      size15: React.CSSProperties['fontSize'];
      size16: React.CSSProperties['fontSize'];
      size17: React.CSSProperties['fontSize'];
      size18: React.CSSProperties['fontSize'];
      size20: React.CSSProperties['fontSize'];
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    fontSize: {
      default: React.CSSProperties['fontSize'];
      size15: React.CSSProperties['fontSize'];
      size16: React.CSSProperties['fontSize'];
      size17: React.CSSProperties['fontSize'];
      size18: React.CSSProperties['fontSize'];
      size20: React.CSSProperties['fontSize'];
    };
  }
}
