import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { useStyles } from '../Styles/navbarStyling';
import { Divider } from '@material-ui/core';

import { Link } from 'react-router-dom';

export default function Navbar() {
    const classes = useStyles();

    const [toggle, setToggle] = useState(false);

    //For media querries
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.height}>
                <Toolbar variant="dense">
                    {/*Nav Header*/}
                    <Typography variant="h6" className={classes.title}>
                        <Link
                            to="/"
                            style={{ textDecoration: 'none' }}
                            className={classes.title}
                        >
                            Scientific Instrument Concern
                        </Link>
                    </Typography>

                    {isMobile ? (
                        <>
                            {/*Nav items*/}
                            <Link to="#" style={{ textDecoration: 'none' }}>
                                <Typography
                                    variant="body2"
                                    className={classes.navItems}
                                >
                                    Our Products
                                </Typography>
                            </Link>
                            <Link
                                to="/Contact"
                                style={{ textDecoration: 'none' }}
                            >
                                <Typography
                                    variant="body2"
                                    className={classes.navItems}
                                >
                                    Contact Us
                                </Typography>
                            </Link>
                            <Link
                                to="/Contact"
                                style={{ textDecoration: 'none' }}
                            >
                                <Typography
                                    variant="body2"
                                    className={classes.navItems}
                                >
                                    Send Enquiry
                                </Typography>
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
                                        <ListItemText
                                            primary={'Our Services'}
                                            className={classes.mobilenavItems}
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText
                                            primary={'Contact Us'}
                                            className={classes.mobilenavItems}
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText
                                            primary={'Send Enquiry'}
                                            className={classes.mobilenavItems}
                                        />
                                    </ListItem>
                                    <Divider />
                                </List>
                            </Drawer>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
