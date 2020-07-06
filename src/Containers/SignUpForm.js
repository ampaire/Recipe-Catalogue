/* eslint-disable camelcase */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MdLogIn from 'react-ionicons/lib/MdLogIn';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImageUploader from 'react-images-upload';
import createUser from '../Actions/SignUp';
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

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      password_confirmation: '',
      image: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidUpdate() {
    const { store, history, fetchUser } = this.props;
    if (store.user.auth_token !== '') {
      fetchUser(store.user.auth_token);
      history.push('/recipes');
    }
  }

  onDrop(picture) {
    this.setState({ image: picture[0] });
  }

  handleSubmit(ev) {
    const { createUser } = this.props;
    ev.preventDefault();
    createUser(this.state);
    const { store } = this.props;
    if (store.user.auth_token !== '') {
      this.setState({
        fname: '', lname: '', email: '', password: '', password_confirmation: '',
      });
    }
  }

  handleChange(el) {
    const newSate = el.target.value;
    const prevState = this.state;
    this.setState({ ...prevState, [el.target.name]: newSate });
  }

  render() {
    const {
      fname, lname, email, password, password_confirmation,
    } = this.state;
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
              Create an account
            </Typography>
            <form className="login-form" autoComplete="off" validate="true" onSubmit={this.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="fname"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    value={fname}
                    onChange={this.handleChange}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lname"
                    value={lname}
                    onChange={this.handleChange}
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    value={password}
                    type="password"
                    onChange={this.handleChange}
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="confirm password"
                    label="confirm password"
                    value={password_confirmation}
                    type="password"
                    onChange={this.handleChange}
                    id="password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ImageUploader
                    withIcon
                    buttonText="Upload Profile image"
                    onChange={this.onDrop}
                    required
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={500000}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="secondary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="sbmit-signup"
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/login">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
              <Copyright />
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

SignupForm.defaultProps = {
  history: {},
};

SignupForm.propTypes = {
  createUser: PropTypes.func.isRequired,
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
  createUser,
  fetchUser,
};

const mapStateToProps = store => ({ store });

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
