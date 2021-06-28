import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    footer: {
        background: '#272727',
        color: '#fff',
        padding: '2em 3em',
        boxShadow: '0 3px 5px 4px #d0f7ff',
    },
    store: {
        height: '2rem',
        width: '6rem',
    },
    list: {
        fontSize: '15px',
        color: 'rgb(197 197 197)',
        margin: '0.5rem 0',
    },
    form: {
        display: 'flex',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        background: '#525252',
        borderRadius: '4px 0 0 4px',
        width: '15rem',
        marginTop: theme.spacing(2),
        color: '#b7b7b7',
        borderColor: '#b7b7b7 !important',
    },
    btn: {
        marginTop: '1rem',
        padding: '0.5rem 0',
        marginLeft: '-0.5rem',
        borderRadius: '0 4px 4px 0',
        width: '2rem',
    },
    top: {
        marginTop: theme.spacing(2),
    },
    right: {
        marginRight: theme.spacing(2),
    },
    logo: {
        height: '5rem',
        width: '6rem',
    },
}));