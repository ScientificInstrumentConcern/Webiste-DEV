import { makeStyles } from '@material-ui/core/styles';
import Hero from '../../assets/Hero.png'

export const useStyles = makeStyles((theme) => ({
    hero:{
        width:'100%',
        background: `url(${Hero})`,
        height: '69vh',
        backgroundSize: "cover",
    backgroundPosition: "center",
    background: `linear-gradient(rgba(4, 8, 40, 0.8), rgba(0, 0, 0, 0.8)),url(${Hero})`
    },
    section:{
        padding: '20vh 0 0 0'
    },
    btn:{
        padding: '0.5rem 0.9rem',
        margin: '6vh 0 0 0'
    }
    

}));



