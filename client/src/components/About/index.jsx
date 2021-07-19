import { Typography } from '@material-ui/core';
import React from 'react'
//Styling
import { useStyles } from '../../Styles/About';
function About() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.hero}>
                <div className={classes.section}>
                   <Typography align='center' variant='h1'>
                   About Us
                   </Typography>
                </div>
            </div>
        </div>
    )
}

export default About
