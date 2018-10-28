import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import LoginForm from "../../components/auth/LoginForm";
import Logo from "../../components/logo/Logo";
import { withStyles } from "@material-ui/core/styles";

const styles = themes => ({
  root: {
    padding: "1em",
    height: "100vh"
  }
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit = values => {
    console.log(values);
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        justify={"center"}
        className={classes.root}
      >
        <Logo />
        <LoginForm onSubmit={this.submit} buttonTitle={"Login"} />
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToActions = dispatch => {
  return {};
};

const Login1 = withStyles(styles)(Login);

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(Login1);
