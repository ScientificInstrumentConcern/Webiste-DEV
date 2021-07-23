//For adding multiple class in a component
import clsx from 'clsx';
//MUI components
import {Typography, Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';
//Icons
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LinkedIn from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import RoomIcon from '@material-ui/icons/Room';
import FacebookIcon from '@material-ui/icons/Facebook';
//Styling
import { useStyles } from '../../Styles/footer';
//assets
import Logo from '../../assets/Logo.png';
//component
import Subfooter from './Subfooter';
function Footer() {
    const classes = useStyles();
    return (
        <div style={{ background: '#00132f' }}>
            <div className={classes.footer}>
                <Grid container spacing={1}>
                    <Grid container className={classes.top}>
                        {/*Grid for store icons*/}
                        {/*Column-1 logo column */}
                        <Grid item spacing={10} md={6} lg={3} xs={8}>
                            <img
                                src={Logo}
                                className={classes.logo}
                                alt="SINCON"
                            />
                            <Typography variant="h6">SINCON</Typography>
                        </Grid>
                        {/*Column-2 Company column */}
                        <Grid item spacing={3} md={6} lg={3} xs={8}>
                            <Typography variant="h6">
                                Important Links
                            </Typography>
                            <Link
                                to="/About"
                                style={{ textDecoration: 'none' }}
                            >
                            <Typography
                                className={clsx(classes.list, classes.top)}
                            >
                                About
                            </Typography>
                            </Link>
                            <Link
                                to="/Contact"
                                style={{ textDecoration: 'none' }}
                            >
                            <Typography
                                className={clsx(classes.list, classes.top)}
                            >
                                Contact Us
                            </Typography>
                            </Link>
                            <Link
                                to="/Product"
                                style={{ textDecoration: 'none' }}
                            >
                            <Typography
                                className={clsx(classes.list, classes.top)}
                            >
                                Our Products
                            </Typography>
                            </Link>
                        </Grid>
                        {/*Column-2 Company column */}
                        <Grid item spacing={3} md={6} lg={3} xs={11}>
                            <Typography variant="h6">Contact Info</Typography>

                            <Typography
                                className={clsx(classes.list, classes.top)}
                            >
                                Address
                            </Typography>
                            <Typography color='primary' style={{display:'flex'}} variant='body2'>
                            <RoomIcon  style={{marginRight: '0.4rem'}}/>
                            HA/148/1st Floor, Salt Lake City, Sector- III, <br/>Kolkata - 700097. West Bengal, India
                            </Typography>
                            <Typography
                                className={clsx(classes.list, classes.top)}
                            >
                                Email:
                            </Typography>
                            <a
                                class="mailto"
                                href="mailto:sinconsales@gmail.com"
                                style={{
                                    textDecoration: 'none',
                                    color: '#fff',
                                    display:'flex'
                                }}
                            >
                                <MailIcon
                                    fontSize='small' style={{marginRight: '0.5rem'}}
                                />
                                sinconsales@gmail.com
                            </a>
                            <Typography
                                className={clsx(classes.list, classes.top)}
                            >
                                Phone number:
                            </Typography>
                            <a
                                target="_blank"
                                href="tel:+91-900-792-2972"
                                style={{
                                    textDecoration: 'none',
                                    color: '#fff',
                                    display:'flex'
                                }}
                            >
                                <PhoneIcon
                                fontSize='small'
                                    style={{marginRight: '0.5rem'}}
                                />
                                +900-7922-972
                            </a>
                        </Grid>
                        {/* Column-3 Social column */}
                        <Grid item md={6} lg={3} xs={10}>
                            <Typography variant="h6"> Social Links </Typography>
                            <Typography
                                className={clsx(classes.list)}
                            >
                                Follow us on:
                            </Typography>
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
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/company/78576321"
                                style={{
                                    textDecoration: 'none',
                                    color: '#fff',
                                }}
                            >
                                <FacebookIcon
                                    className={clsx(classes.right, classes.top)}
                                />
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <Subfooter />
        </div>
)}
export default Footer;
