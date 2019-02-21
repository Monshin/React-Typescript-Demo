import createMuiTheme, {
  ThemeOptions
} from '@material-ui/core/styles/createMuiTheme';

export default function createMyTheme(options?: ThemeOptions) {
  return createMuiTheme({
    ...options,
    fontFamily: "'Microsoft JhengHei'",
    typography: {
      fontFamily: "'Microsoft JhengHei'",
      useNextVariants: true
      // suppressDeprecationWarnings: true,
    }
  });
}
