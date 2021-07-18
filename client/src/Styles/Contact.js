import { makeStyles } from '@material-ui/core/styles';
import Hero from '../assets/Contact.png';
export const useStyles = makeStyles((theme) => ({
   
    root: {
        width: '100%',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        background: `linear-gradient(rgba(0, 30, 90, 0.9), rgba(0, 30, 90, 0.6)),url(${Hero})`,
        color: theme.palette.primary.main
    },
    section: {
        padding: '20vh 0  10vh 0',
    },
}));
