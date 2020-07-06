import React from 'react';
import PropTypes from 'prop-types';
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
import { connect } from 'react-redux';
import loginUser from '../Actions/Login';
import fetchUser from '../Actions/set-user';

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

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // eslint-disable-next-line camelcase
  componentDidUpdate() {
    const { store, history, fetchUser } = this.props;
    if (store.user.auth_token !== '') {
      fetchUser(store.user.auth_token);
      history.push('/items');
    }
  }

  handleSubmit(ev) {
    const { loginUser } = this.props;
    ev.preventDefault();
    loginUser(this.state);
    this.setState({ email: '', password: '' });
  }

  handleChange(el) {
    const newSate = el.target.value;
    const prevState = this.state;
    this.setState({ ...prevState, [el.target.name]: newSate });
  }

  render() {
    return (
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
            <form className="login-form" autoComplete="off" validate="true" onSubmit={this.handleSubmit}>
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
  }
}

LoginForm.defaultProps = {
  history: {},
};

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
  store: PropTypes.shape({
    user: PropTypes.shape({
      auth_token: PropTypes.string,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

const mapDispatchToProps = {
  loginUser,
  fetchUser,
};

const mapStateToProps = store => ({ store });

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
