import React, { Component } from "react";
import Button from "@mui/material/Button";
import LanguageContext from "../contexts/LanguageContext";
import Stack from "@mui/material/Stack";
import ColorContext from "../contexts/ColorContext";

export class FoamButton extends Component {
  // static contextType = LanguageContext;

  renderButton(color) {
    return (
      <Button variant="contained" color={color}>
        <LanguageContext.Consumer>
          {(value) => (value === "english" ? "Submit" : "Enviar")}
        </LanguageContext.Consumer>
      </Button>
    );
  }

  render() {
    // const text = this.context === "english" ? "Submit" : "Enviar";
    return (
      <Stack sx={{ mt: 2 }}>
        {/* <Button variant="contained">{text}</Button> */}

        <ColorContext.Consumer>
          {(color) => this.renderButton(color)}
        </ColorContext.Consumer>
      </Stack>
    );
  }
}

export default FoamButton;
