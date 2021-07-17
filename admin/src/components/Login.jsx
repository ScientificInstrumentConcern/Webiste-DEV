import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { LinearProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { useStyles } from '../Styles/auth';

import * as yup from 'yup';
import { useFormik } from 'formik';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/action-creators';

export default function Login() {
    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();

    const validationSchema = yup.object({
        email: yup.string().email('Invalid email format').required('Required'),
        password: yup.string().required('Password is Required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(userLogin(values.email, values.password));
            history.push('/');
        },
    });

    const { data, error, loading } = useSelector((state) => state.userLogin);

    useEffect(() => {
        if (data) {
            history.push('/');
        }
    }, [history, data]);

    return (
        <>
            {loading && (
                <LinearProgress
                    style={{ marginTop: '4px', marginBottom: '4px' }}
                    color="primary"
                />
            )}
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={false} md={4}></Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    component={Paper}
                    elevation={0}
                >
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h3">
                            SINCON
                        </Typography>
                        <br />
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        {error && (
                            <Alert
                                style={{ marginTop: '8px', width: '100%' }}
                                variant="outlined"
                                severity="error"
                            >
                                {error}
                            </Alert>
                        )}
                        <form
                            className={classes.form}
                            noValidate
                            onSubmit={(e) => {
                                e.preventDefault();
                                formik.handleSubmit();
                            }}
                            autoComplete="off"
                        >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.email &&
                                    Boolean(formik.errors.email)
                                }
                                helperText={
                                    formik.touched.email && formik.errors.email
                                }
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.password &&
                                    Boolean(formik.errors.password)
                                }
                                helperText={
                                    formik.touched.password &&
                                    formik.errors.password
                                }
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Login
                            </Button>
                        </form>
                    </div>
                </Grid>
                <Grid item xs={false} sm={false} md={4}></Grid>
            </Grid>
        </>
    );
}
