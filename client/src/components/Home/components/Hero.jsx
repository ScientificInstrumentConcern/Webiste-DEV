import { Typography, Button, IconButton } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from '../../../Styles/Home/hero';
import { animateScroll as scroll } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Hero() {
    const classes = useStyles();
    function Scroll() {
        scroll.scrollMore(700);
    }
    return (
        <div>
            <div className={classes.hero}>
                <div className={classes.section}>
                    <Typography align="center" variant="h1" color="primary">
                        Scientific Instrument Concern
                    </Typography>
                    <Typography
                        align="center"
                        variant="h4"
                        color="primary"
                    >
                        Always a step ahead in technology
                    </Typography>
                    <Typography align="center" variant="h6" style={{margin: '2rem 0 5vh 0 '}}>
                        <Link to="/products" style={{ textDecoration: 'none' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.btn}
                            >
                                View Products
                            </Button>
                        </Link>

                        <Link to="/Contact" style={{ textDecoration: 'none' }}>
                            <Button
                                variant="outlined"
                                color="primary"
                                className={classes.btn}
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </Typography>
                </div>
                <Typography align="center">
                    <Link onClick={Scroll} smooth={true} durations={500}>
                        <IconButton>
                            <ExpandMoreIcon color="primary" fontSize="large" />
                        </IconButton>
                    </Link>
                </Typography>
            </div>
        </div>
    );
}

export default Hero;
