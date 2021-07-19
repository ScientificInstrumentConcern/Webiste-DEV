import Clients from '../Home/components/Clients'
import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
//Styling
import { useStyles } from '../../Styles/About';
function About() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.hero}>
                <div className={classes.section}>
                    <Typography align="center" variant="h1">
                        About Us
                    </Typography>
                </div>
            </div>
            <br />
            <Container maxWidth='md'>
                <Typography
                    align="center"
                    variant="h3"
                    className={classes.margin}
                >
                    Scientific Instrument Concern
                </Typography>
                <Typography variant='body1'>
                    We are one of the leading manufacturers and suppliers of "
                    SINCON" brand laboratory Research equipment and Scientific
                    Instruments. We have wide range of Heating & cooling
                    equipment's, General lab Equipment's, Micro-tome
                    Equipment's, Microscopy Equipment, Clear Air System,
                    Entomology Equipment's, Pharmaceutical Equipment's, Oil and
                    Petroleum Testing Equipment's, Electronic Analytical
                    Equipment's etc to various Universities,college, R & D labs,
                    Institutes, Industries etc.
                </Typography>
                <br />
                <br />
            </Container>
            <div className={classes.find}>
                <Container>
                    <Typography variant="h5" className={classes.padding} style={{fontWeight:'600', textDecoration: 'underline'}}>
                        Find Us At:
                    </Typography>
                    <Grid container>
                        <Grid item md={6}>
                            <Typography variant="h6">Kolkata</Typography>
                            <Typography variant="body1">
                                HA/148/1st Floor, Salt Lake city, Sector:III
                             <br/>   Kolkata:70097,West Bengal, India
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <div className="google-map-code">
                                <iframe
                                    src="https://maps.google.com/maps?hl=en&amp;q=SCIENTIFIC%20INSTRUMENT%20CONCERN;q=22.575815895599796,88.41221809387207+(Scientific%20Instrument%20Concern)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    width="600"
                                    height="300"
                                    frameborder="0"
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    aria-hidden="false"
                                    tabindex="0"
                                ></iframe>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Clients/>
        </>
    );
}

export default About;

