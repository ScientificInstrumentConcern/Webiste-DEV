import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        margin: '5rem 0.5rem',
    },
    imageIllustration: {
        width: '94%',
        height: '94%',
    },
    leftGrid: {
        marginTop: '1rem',
    },
    leftHeading: {
        fontSize: '3rem',
        fontWeight: 900,
        color: 'rgba(26,32,44,var(--tw-text-opacity))',
        lineHeight: '1.25',
        textAlign: 'left',
    },
    leftPara: {
        marginTop: '1rem',
        marginBottom: '1rem',
        fontSize: '1.31rem',
        opacity: 0.8,
        lineHeight: '1.4',
    },
    display: {
        display: 'none',
    },
}));
