import { makeStyles } from '@material-ui/core/styles';
import Hero from '../assets/Contact.png';
export const useStyles = makeStyles((theme) => ({
   
    root: {
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        background: `linear-gradient(rgba(0, 30, 90, 0.9), rgba(0, 30, 90, 0.8)),url(${Hero})`,
        color: theme.palette.primary.main
    },
    section: {
        paddingTop: '16vh',
    },
    margin:{
        margin: theme.spacing(2, 0)
    },
    paper:{
        
    }
}));
