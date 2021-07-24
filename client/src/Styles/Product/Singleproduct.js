import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        boxShadow: '0 0 2px 1px grey',
    },
    media: {
        height: 270,
    },
    title: {
        fontWeight: '600',
    },
    section: {
        padding: '5vh 0',
    },
}));
