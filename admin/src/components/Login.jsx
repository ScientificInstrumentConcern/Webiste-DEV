import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "../Styles/auth";

export default function Login() {
  const history = useHistory();
  const classes = useStyles();
  const isMobile = window.innerWidth <= 880;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // submit handler
  const submitHandler = (event) => {};

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={false} md={4}></Grid>
      <Grid item xs={12} sm={12} md={4} component={Paper} elevation={0}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h3">
            MyDiary
          </Typography>
          <br />
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              onClick={submitHandler}
            >
              Login
            </Button>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={false} md={4}></Grid>
    </Grid>
  );
}