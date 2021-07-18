import {
    Container,
    Grid,
    Typography,
    Paper,
    TextField,
} from '@material-ui/core';
import { Room, Mail, Phone } from '@material-ui/icons';
//Styling
import { useStyles } from '../../Styles/Contact';
function Contact() {
    const classes = useStyles();
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
                        <Typography variant='h6'>
                            Contact Person
                        </Typography>
                        <Typography variant='body1'>
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
                    <Grid item md={5}>
                        <Paper>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                label="lol"
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
