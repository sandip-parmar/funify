import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import SignUpForm from "../../components/auth/SignUpForm";
import Logo from "../../components/logo/Logo";
import { withStyles } from "@material-ui/core/styles";

const styles = themes => ({
  root: {
    padding: "1em",
    height: "100vh"
  }
});

class SignUp extends React.Component {
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
        <SignUpForm onSubmit={this.submit} buttonTitle={"Sign up"} />
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

const SignUp1 = withStyles(styles)(SignUp);

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(SignUp1);
