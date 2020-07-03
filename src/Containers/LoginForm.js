import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MdLogIn from 'react-ionicons/lib/MdLogIn';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        The CookBook
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

const LoginForm = () => (
  <Grid container component="main" className="login-page">
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className="login-bg-img" />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className="login-paper">
        <Avatar className="login-avt">
          <MdLogIn />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className="login-form" noValidate>
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
            className="sbmit-login"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgotpsswd" className="links">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" className="links">
                Don&apos;t have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </form>
      </div>
    </Grid>
  </Grid>
);

export default LoginForm;
