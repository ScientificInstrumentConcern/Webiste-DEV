import { Button, Grid, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import HeroImage from '../../../assets/support.svg';
import { useStyles } from '../../../Styles/Home/About';

const SendEdquiry = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="space-around">
                <Grid item md={4}>
                    <img
                        className={classes.imageIllustration}
                        src={HeroImage}
                    />
                </Grid>
                <Grid
                    item
                    md={7}
                    className={classes.leftGrid}
                    style={{ marginTop: '4rem' }}
                >
                    <Typography
                        className={classes.leftHeading}
                        variant="h3"
                        component="h2"
                    >
                        Have an enquiry ?
                    </Typography>
                    <Typography
                        className={classes.leftPara}
                        variant="h5"
                        component="p"
                    >
                        Having an enquiry or want to contact us. Feel free to
                        contact our support team about the company or instrument
                        specifications, they are always there to answer you
                    </Typography>
                    <br />
                    <Link to="/Contact" style={{ textDecoration: 'none' }}>
                        <Button color="secondary" variant="contained">
                            Send Enquiry
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
};

export default SendEdquiry;
