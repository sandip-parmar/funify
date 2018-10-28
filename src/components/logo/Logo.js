import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const StyledDiv = styled.div`
    margin-bottom: 2em
`;

class Logo extends React.Component {
  render() {
    return (
      <StyledDiv>
        <Typography variant={"display1"}>My App</Typography>
      </StyledDiv>
    );
  }
}

export default Logo;
