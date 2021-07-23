import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Exit from '@material-ui/icons/ExitToApp';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link, useHistory } from 'react-router-dom';

import { useStyles } from '../Styles/navbar';

// REDUX
import { userLogout } from '../redux/action-creators';
import { useDispatch } from 'react-redux';

export default function Navbar() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [toggle, setToggle] = useState(false);

    //For media querries
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('md'));

    // handling logout
    const logoutHandler = (e) => {
        dispatch(userLogout());
        history.push('/Login');
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.height}>
                <Toolbar variant="regular">
                    {/*Nav Header*/}
                    <Typography variant="h4" className={classes.title}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            SINCON
                        </Link>
                    </Typography>

                    {isMobile ? (
                        <>
                            {/*Nav items*/}
                            <Exit className={classes.exit} />
                            <Typography
                                variant="body2"
                                className={classes.navItems}
                                onClick={logoutHandler}
                            >
                                Logout
                            </Typography>
                            <Link to="/new" style={{ textDecoration: 'none' }}>
                                <Button color="inherit" variant="outlined">
                                    <AddIcon /> Add a new Instrument
                                </Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            {/*Mobile view navbar*/}
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                onClick={() => setToggle(true)}
                                color="inherit"
                                aria-label="menu"
                                style={{ color: 'blue' }}
                            >
                                <MenuIcon />
                            </IconButton>

                            {/*///      FOR MOBILE VIEW    ///*/}
                            <Drawer
                                anchor="right"
                                open={toggle}
                                onClose={() => setToggle(false)}
                            >
                                <List className={classes.list}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <Exit className={classes.exit} />
                                        </ListItemIcon>
                                        <ListItemText
                                            className={classes.mobilenavItems}
                                            onClick={logoutHandler}
                                        >
                                            Logout
                                        </ListItemText>
                                    </ListItem>
                                    <Link
                                        to="/new"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <ListItem button>
                                            <ListItemIcon>
                                                <AddIcon
                                                    className={classes.exit}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                className={
                                                    classes.mobilenavItems
                                                }
                                            >
                                                Add a new Instrument
                                            </ListItemText>
                                        </ListItem>
                                    </Link>
                                </List>
                            </Drawer>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
