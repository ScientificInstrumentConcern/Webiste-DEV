import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow: '0 1px 1px 1px #0000',
    },
    height: {
        height: '4rem',
        background: 'rgba(0, 30, 90, 0.1)',
    },
    menuButton: {
        marginRight: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
        margin: '2rem 0.5rem',
        color: theme.palette.primary.main,
        fontWeight: 600,
    },
    navItems: {
        color: theme.palette.primary.main,
        flexGrow: 0.1,
        fontWeight: 600,
        fontSize: '1rem',
        marginRight: theme.spacing(5),
    },
    mobilenavItems: {
        color: theme.palette.secondary.main,
        flexGrow: 0.1,
        fontWeight: 600,
        fontSize: '1rem',
        padding: '1rem 1.3rem',
        alignContent: 'center',
        alignItems: 'center',
    },
    list: {
        width: 200,
        alignContent: 'center',
        alignItems: 'center',
    },
    fullList: {
        width: 'auto',
    },
}));
