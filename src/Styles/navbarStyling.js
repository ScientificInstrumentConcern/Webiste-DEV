import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: '0 3px 5px 4px #d0f7ff',
  },
  height: {
    height: '4rem',
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
    margin: '2rem 0.5rem',
    color: '#4D7178',
    fontWeight: 600,
  },
  navItems: {
    color: '#4D7178',
    flexGrow: 0.1,
    fontWeight: 600,
    fontSize: '1rem',
    marginRight: theme.spacing(5),
  },
  mobilenavItems: {
    color: '#4D7178',
    flexGrow: 0.1,
    fontWeight: 600,
    fontSize: '1rem',
    padding: '1rem 0',
  },
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
}));
