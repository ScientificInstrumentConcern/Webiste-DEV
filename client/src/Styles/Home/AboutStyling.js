import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        margin: '1rem 0.5rem',
    },
    imageIllustration: {
        width: '94%',
        height: '94%',
    },
    leftGrid: {
        marginTop: '3rem',
    },
    leftHeading: {
        fontSize: '2.8rem',
        fontWeight: 900,
        color: 'rgba(26,32,44,var(--tw-text-opacity))',
        lineHeight: '1.25',
        textAlign: 'left',
    },
    leftPara: {
        marginTop: '1rem',
        marginBottom: '1rem',
        fontSize: '1.16rem',
        opacity: 0.8,
    },
    display: {
        display: 'none',
    },
}));
