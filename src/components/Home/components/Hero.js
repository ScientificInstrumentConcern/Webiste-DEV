import { Typography, Button } from '@material-ui/core';
import React from 'react';

//import HeroImage from 'https://images.unsplash.com/photo-1599318524598-6274dfab44ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
import { useStyles } from '../../../Styles/Home/heroStyling';

function Hero() {
    const classes = useStyles();

    return <div>
        <div className={classes.hero}> 
        <div className={classes.section}>
            <Typography align='center' variant='h2' color='primary'>Scientific Instrument Concern</Typography>
            <Typography align='center' variant='subtitle2' color='primary'>Always a step ahead in technology</Typography>
            <Typography align='center'><Button variant="outlined" color='primary' className={classes.btn}> View Catalouge </Button></Typography> 
        </div>
        </div>
</div>;
}

export default Hero;
