import { makeStyles } from '@material-ui/core/styles';
import Hero from '../assets/About.png';
export const useStyles = makeStyles((theme) => ({
    hero: {
        minHeight: '60vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        background: `linear-gradient(rgba(0, 30, 90, 0.9), rgba(0, 30, 90, 0.8)),url(${Hero})`,
        color: theme.palette.primary.main
    },
    section: {
        paddingTop: '20vh',
    },
    margin:{
        margin:theme.spacing(2)
    },
    padding:{
        padding:theme.spacing(2,0)
    },
    find:{
        background: '#1e3870',
        color:theme.palette.primary.main
    }

}));
