import React, { useEffect } from "react";
import { useHistory } from "react-router";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "../Styles/auth";

import * as yup from "yup";
import { useFormik } from "formik";

const Register = ({ history }) => {
  const classes = useStyles();

  const validationSchema = yup.object({
    name: yup.string().email("Invalid email format").required("Required"),
    email: yup.string().email("Invalid email format").required("Required"),
    password: yup.string().min(5, 'Password should be of minimum 5 characters length').required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={false} md={4}></Grid>

      <Grid item xs={12} sm={12} md={4} component={Paper} elevation={0}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h3">
            SINCON
          </Typography>
          <br />
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
            className={classes.form}
            noValidate
            autoComplete="off"
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Name"
              label="Your Name"
              name="name"
              autoFocus
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register as Admin
            </Button>
          </form>
        </div>
      </Grid>

      <Grid item xs={false} sm={false} md={4}></Grid>
    </Grid>
  );
};

export default Register;
