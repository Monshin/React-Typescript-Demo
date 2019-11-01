import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export default function createMyTheme(options?: ThemeOptions) {
  const defaultTheme = createMuiTheme({
    fontSize: {
      default: '1rem',
      size15: '1.07142857143rem',
      size16: '1.14285714286rem',
      size17: '1.21428571429rem',
      size18: '1.28571428571rem',
      size20: '1.42857142857rem',
    },
    typography: {
      fontFamily: '"Microsoft JhengHei", "PingFangTC", Arial, sans-serif',
      fontSize: 14,
    },
  });

  return createMuiTheme({
    ...options,
    ...defaultTheme,
    palette: {
      background: {
        default: '#f8f8f8',
        paper: '#ffffff',
      },
    },
    overrides: {
      MuiTypography: {
        body2: {
          fontSize: defaultTheme.fontSize.default,
        },
      },
      MuiCard: {
        root: {
          boxShadow: 'none',
        },
      },
      MuiCardMedia: {
        root: {
          '-webkit-transform': 'translate3d(0, 0, 0)',
        },
      },
      MuiFormLabel: {
        root: {
          fontSize: 'inherit',
        },
      },
      MuiInput: {
        root: {
          fontSize: 'inherit',
        },
      },
      MuiButtonBase: {
        root: {
          fontSize: 'inherit',
        },
      },
      MuiButton: {
        root: {
          fontSize: 'inherit',
        },
        textPrimary: {
          '&:hover': {
            backgroundColor: undefined,
            opacity: 0.8,
          },
        },
      },
      MuiListItemAvatar: {
        root: {
          minWidth: undefined,
          marginRight: defaultTheme.spacing(2),
        },
      },
      MuiAvatar: {
        root: {
          '-webkit-mask-image': '-webkit-radial-gradient(white, black)',
        },
        img: {
          '-webkit-transform': 'translate3d(0, 0, 0)',
        },
      },
    },
  });
}
