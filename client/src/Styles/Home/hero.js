import { makeStyles } from '@material-ui/core/styles';
import Hero from '../../assets/Cover.png';

export const useStyles = makeStyles((theme) => ({
    root: {
        //  background: '#fff'
    },
    hero: {
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        background: `linear-gradient(rgba(0, 30, 90, 0.9), rgba(0, 30, 90, 0.6)),url(${Hero})`,
    },
    section: {
        padding: '30vh 0  10vh 0',
    },
    btn: {
        padding: '0.5rem 1.2rem',
        margin: '2vh 2rem',
        fontWeight: '600',
        fontSize: '15px',
    },
}));
