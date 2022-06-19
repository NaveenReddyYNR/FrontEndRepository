import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export class Feild extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Name" : "Nombre";
    const textForm = this.context === "english" ? "Fill the Form" : "Completa El Formulario";

    return (
      <React.Fragment>
        <Typography
          sx={{
            marginBottom: 2,
            fontWeight: "400",
            fontSize: "1rem",
            lineHeight: "1.4375em",
            letterSpacing: "0.00938em",
          }}
        >
          {textForm}:
        </Typography>
        <TextField
          id="filled-hidden-label-small"
          label={text}
          variant="filled"
          size="small"
        />
      </React.Fragment>
    );
  }
}

export default Feild;
