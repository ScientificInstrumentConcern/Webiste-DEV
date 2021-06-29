import { Typography, Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
//import HeroImage from 'https://images.unsplash.com/photo-1599318524598-6274dfab44ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
import { useStyles } from '../../../Styles/Home/heroStyling';

function Hero() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.hero}>
                <div className={classes.section}>
                    <Typography align="center" variant="h2" color="primary">
                        Scientific Instrument Concern
                    </Typography>
                    <Typography
                        align="center"
                        variant="subtitle2"
                        color="primary"
                    >
                        Always a step ahead in technology
                    </Typography>
                    <a
                        href="https://firebasestorage.googleapis.com/v0/b/tutorial-8017f.appspot.com/o/Final%20Catalogue%20SINCON-compressed.pdf?alt=media&token=1dd52908-bea5-4783-bdd0-4c58a8d52533"
                        target="blank"
                    >
                        {' '}
                        <Typography align="center">
                            <Button
                                variant="outlined"
                                color="primary"
                                className={classes.btn}
                            >
                                {' '}
                                View Catalouge{' '}
                            </Button>
                        </Typography>{' '}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;
