import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "@material-ui/core/styles";
import SocialLogin from "./SocialLogin";

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    fullWidth={true}
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const styles = theme => ({
  loginForm: {
    "max-width": "25em"
  }
});
class LoginForm extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        direction={"row"}
        justify={"center"}
        align-items={"center"}
        className={classes.loginForm}
      >
        <Grid item xs={12}>
          <form onSubmit={this.props.handleSubmit}>
            <Grid
              container
              direction={"column"}
              justify={"center"}
              spacing={16}
            >
              <Grid item>
                <Field
                  name="username"
                  component={renderTextField}
                  type={"text"}
                  placeholder={"Username"}
                />
              </Grid>

              <Grid item>
                <Field
                  name="password"
                  component={renderTextField}
                  type={"password"}
                  placeholder={"Password"}
                />
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  size={"large"}
                  variant={"contained"}
                  color={"primary"}
                  fullWidth={true}
                >
                  {this.props.buttonTitle}
                </Button>
              </Grid>

              <Grid item>
                <SocialLogin title={"Login"} />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
}

const Login = withStyles(styles)(LoginForm);

export default reduxForm({
  form: "loginForm"
})(Login);
