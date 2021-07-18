import { Container, Grid, Typography, Paper, TextField } from '@material-ui/core';
import {Room, Mail, Phone} from '@material-ui/icons';
//Styling
import { useStyles } from '../../Styles/Contact';
function Contact() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.section}>
                <Grid container>
                    <Grid item md={6}>
                        <Typography variant="h4">Contact Us</Typography>
                        <Typography >
                            Address
                        </Typography>
                        <Typography
                            color="primary"
                            style={{ display: 'flex' }}
                            variant="body2"
                        >
                            <Room style={{ marginRight: '0.4rem' }} />
                            HA/148/1st Floor, Salt Lake City, Sector- III,{' '}
                            <br />
                            Kolkata - 700097. West Bengal, India
                        </Typography>
                        <Typography >
                            Email:
                        </Typography>
                        <a
                            class="mailto"
                            href="mailto:sinconsales@gmail.com"
                            style={{
                                textDecoration: 'none',
                                color: '#fff',
                                display: 'flex',
                            }}
                        >
                            <Mail
                                fontSize="small"
                                style={{ marginRight: '0.5rem' }}
                            />
                            sinconsales@gmail.com
                        </a>
                        <Typography >
                            Phone number:
                        </Typography>
                        <a
                            target="_blank"
                            href="tel:+91-900-792-2972"
                            style={{
                                textDecoration: 'none',
                                color: '#fff',
                                display: 'flex',
                            }}
                        >
                            <Phone
                                fontSize="small"
                                style={{ marginRight: '0.5rem' }}
                            />
                            +900-7922-972
                        </a>
                    </Grid>
                    {/*For form*/}
                    <Grid item md={6}>
                        <Paper>
                           <TextField
                           variant='outlined'
                           margin='normal'
                           required
                           label='lol'
                           autofocus
                           /> 
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Contact;
