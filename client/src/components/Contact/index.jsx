import {
    Container,
    Grid,
    Typography,
    Paper,
    TextField,
    Button,
} from '@material-ui/core';
import { Room, Mail, Phone } from '@material-ui/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactenquiry } from '../../redux/action-types';
//Styling
import { useStyles } from '../../Styles/Contact';
function Contact() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [company, setCompany] = useState();
    const [country, setCountry] = useState();
    const [city, setCity] = useState();
    const [msg, setMsg] = useState();

    const [log, setLog] = useState(false);

    //OnSubmit function dispatch all data to api and render to homepage
    const submit = () => {
        dispatch(contactenquiry(name, email, company, country, city, msg));
        setLog(true);
    };

    return (
        <div className={classes.root}>
            <Container className={classes.section}>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.margin}>
                            <Typography variant="h4">LET’S CONNECT!</Typography>
                            <Typography variant="body1">
                                If you have any questions or queries a member of
                                staff will always be happy to help. Feel free to
                                fill out the form below or contact us by
                                telephone or email and we will be sure to get
                                back to you as soon as possible.
                            </Typography>
                        </div>
                        <Typography variant="h6">Registered Office:</Typography>
                        <Typography
                            color="primary"
                            style={{ display: 'flex' }}
                            variant="body1"
                        >
                            <Room style={{ marginRight: '0.4rem' }} />
                            HA/148/1st Floor, Salt Lake City, Sector- III,{' '}
                            Kolkata - 700097. West Bengal, India
                        </Typography>
                        <div className={classes.margin}>
                            <Typography variant="h6">Contact Person</Typography>
                            <Typography variant="body1">
                                Nripotee Ranjan Das
                            </Typography>
                        </div>
                        <div className={classes.margin}>
                            <Typography variant="h6">Email:</Typography>
                            <Typography variant="body1">
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
                                <a
                                    class="mailto"
                                    href="mailto:nripotee@gmail.com"
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
                                    nripotee@gmail.com
                                </a>
                            </Typography>
                        </div>
                        <Typography variant="h6">Phone number:</Typography>
                        <Typography variant="body1">
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
                        </Typography>
                    </Grid>
                    {/*For extra space*/}
                    <Grid item md={1}>
                        {''}
                    </Grid>
                    {/*For form*/}
                    <Grid item md={5} xs={12}>
                        <Paper className={classes.paper}>
                            <Typography
                                color="secondary"
                                align="center"
                                variant="h6"
                                className={classes.margin}
                            >
                                Drop Us A Message For Any Query
                            </Typography>
                            {log ? (
                                <Typography align="center">
                                    Thank you for submitting form one of our
                                    representive will contact you soon
                                </Typography>
                            ) : (
                                <></>
                            )}

                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                label="Name"
                                autofocus
                                color="secondary"
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                label="email"
                                autofocus
                                color="secondary"
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                label="Company Name"
                                autofocus
                                color="secondary"
                                fullWidth
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />

                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                label="Country"
                                autofocus
                                color="secondary"
                                fullWidth
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />

                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                label="City"
                                autofocus
                                color="secondary"
                                fullWidth
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />

                            <TextField
                                variant="filled"
                                margin="normal"
                                required
                                label="Your message"
                                autofocus
                                color="secondary"
                                fullWidth
                                value={msg}
                                onChange={(e) => setMsg(e.target.value)}
                            />

                            <br />
                            <br />
                            <Button variant="outlined" onClick={submit}>
                                Submit
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Contact;
