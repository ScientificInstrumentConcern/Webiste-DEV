import { Typography, Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Typography align="center">
                            <Link to='/products' style={{textDecoration: 'none'}}>
                            <Button
                                variant="outlined"
                                color="primary"
                                className={classes.btn}
                            >
                               View Products
                            </Button>
                            </Link>
                        </Typography>
                </div>
            </div>
        </div>
    );
}

export default Hero;
