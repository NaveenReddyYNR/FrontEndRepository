import { Button, styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
// import { theme } from "./theme";

function Buttons() {
  const BlackButton = styled(Button)({
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "grey",
      color: "black",
    },
    "&:disabled": {
      backgroundColor: "grey",
      color: "white",
    },
  });

  return (
    <div style={{ margin: "20px" }}>
      <h3>Buttons: </h3>
      <br />
      <Stack direction="row" spacing={2}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>

        <Button variant="contained" color="secondary" size="small">
          Contained Secondary
        </Button>
        <Button variant="outlined" disabled>
          Outlined
        </Button>
        <Button variant="contained" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "red",
            color: "#white",
            "&:hover": {
              backgroundColor: "greenyellow",
              color: "#888",
            },
          }}
        >
          Custom
        </Button>
      </Stack>
      <br />
      <Stack direction="row" spacing={2}>
        <BlackButton size="small">BlackButton</BlackButton>
        <BlackButton size="small" disabled>
          disabled
        </BlackButton>
        {/* <ThemeProvider theme={theme}>
          <button color={theme.palette.primary.main}>Primary</button>
        </ThemeProvider> */}
      </Stack>
    </div>
  );
}

export default Buttons;
