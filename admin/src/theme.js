import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        // type: 'dark',
        primary: {
            main: '#235cb0',
        },
        secondary: {
            main: '#4D7178',
        },
    },
    typography: {
        fontFamily: '"Segoe UI "',
        color: '#000',
        h1: {
            fontFamily: 'Prata',
        },
        h2: {
            fontFamily: 'Prata',
        },
        h3: {
            fontFamily: '"Segoe UI "',
            fontWeight: 600,
        },
        h4: {
            fontFamily: 'Prata',
        },
        h5: {
            fontFamily: 'Prata',
        },
        h6: {
            fontFamily: 'Prata',
        },
        subtitle1: {
            fontFamily: 'Lato',
        },
        subtitle2: {
            fontFamily: 'Lato',
            fontSize: '21px',
        },
    },
    props: {
        MuiTooltip: {
            arrow: true,
        },
    },
    shape: {
        borderRadius: 10,
    },
    overrides: {
        MuiStepper: {
            root: {
                background: 'none',
                border: 'none',
            },
        },
    },
});

export default responsiveFontSizes(theme);
