import {Grid,Typography } from '@material-ui/core';
import { useHistory} from 'react-router-dom';
import React from 'react';
import HeroImage from '../../../assets/about.svg';
import { useStyles } from '../../../Styles/Home/AboutStyling';

const About = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <Grid container justify="space-around">
                <Grid item md={6} className={classes.leftGrid}>
                    <Typography
                        className={classes.leftHeading}
                        variant="h3"
                        component="h2"
                    >
                        About Us
                    </Typography>
                    <Typography
                        className={classes.leftPara}
                        variant="h5"
                        component="p"
                    >
                        We are one of the leading manufacturers and suppliers of
                        " SINCON" brand laboratory Research equipment and
                        Scientific Instruments.
                        <br />
                        We have wide range of Heating & cooling equipment's,
                        General lab Equipment's, Micro-tome Equipment's,
                        Microscopy Equipment, Clear Air System, Entomology
                        Equipment's, Pharmaceutical Equipment's, Oil and
                        Petroleum Testing Equipment's, Electronic Analytical
                        Equipment's etc to various Universities,college, R & D
                        labs, Institutes, Industries etc.
                    </Typography>
                </Grid>

                <Grid item md={5}>
                    <img
                        className={classes.imageIllustration}
                        src={HeroImage}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default About;
