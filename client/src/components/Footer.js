//For adding multiple class in a component
import clsx from 'clsx';

//MUI components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { useState } from 'react';
import { Link } from 'react-router-dom';

//Icons
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LinkedIn from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

//Styling
import { useStyles } from '../Styles/footerStyling';
import { Container } from '@material-ui/core';

function Footer() {
    const classes = useStyles();

    const [Label, setLabel] = useState('');

    return (
        <div style={{background:'#00132f'}}>
            <div className={classes.footer}>
                <Grid container spacing={1}>
                    <Grid container className={classes.top}>
                        {' '}
                        {/*Grid for store icons*/}
                        {/*Column-1 logo column */}
                        <Grid item spacing={10} md={6} lg={3} xs={8}>
                            {/*<img src={Logo} className={classes.logo}/>*/}
                            <Typography variant="subtitle2">SINCON</Typography>
                        </Grid>
                        {/*Column-2 Company column */}
                        <Grid item spacing={3} md={6} lg={3} xs={8}>
                            <Typography variant="h6">
                                Important Links
                            </Typography>
                            <Typography
                                className={clsx(classes.list, classes.top)}
                            >
                                About
                            </Typography>
                            <Typography
                                className={clsx(classes.list, classes.top)}
                            >
                                Contact Us
                            </Typography>
                        </Grid>
                        {/*Column-2 Company column */}
                        <Grid item spacing={3} md={6} lg={3} xs={8}>
                            <Typography
                                className={clsx(classes.list, classes.top)}
                            >
                                FAQ
                            </Typography>
                        </Grid>
                        {/*Column-3 Social column */}
                        <Grid item md={6} lg={3} xs={8} spacing={3}>
                            <Typography variant="h5"> Contact Us: </Typography>
                            <a
                                target="_blank"
                                href="tel:+91-900-792-2972"
                                style={{
                                    textDecoration: 'none',
                                    color: '#fff',
                                }}
                            >
                                <PhoneIcon
                                    className={clsx(classes.right, classes.top)}
                                />
                            </a>
                            <a
                                class="mailto"
                                href="mailto:nripotee@gmail.com"
                                style={{
                                    textDecoration: 'none',
                                    color: '#fff',
                                }}
                            >
                                <MailIcon
                                    className={clsx(classes.right, classes.top)}
                                />
                            </a>
                            <a
                                target="_blank"
                                href="https://wa.me/+917685044881"
                                style={{
                                    textDecoration: 'none',
                                    color: '#fff',
                                }}
                            >
                                <WhatsAppIcon
                                    className={clsx(classes.right, classes.top)}
                                />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/company/78576321"
                                style={{
                                    textDecoration: 'none',
                                    color: '#fff',
                                }}
                            >
                                <LinkedIn
                                    className={clsx(classes.right, classes.top)}
                                />
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <Container maxWidth='xl' style={{padding:"1rem 0"}}>
                <Grid container>
                    <Grid item xs={5}>
                        <Typography  color='primary'>
                            Copyright @2021 SINCON. All Rights Reserved.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography align="right">
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography
color="primary"
                                    >
                                        Terms and condition
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography color='primary'
                                    >
                                        Privacy Policy
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Footer;
