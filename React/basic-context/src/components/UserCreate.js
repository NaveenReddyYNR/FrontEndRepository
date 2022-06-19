import React from "react";
import Feild from "./Feild";
import FoamButton from "./FoamButton";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

function UserCreate() {
  return (
    <Box sx={{ margin: 2 }}>
      <Stack
        component="form"
        sx={{
          width: "25ch",
        }}
        noValidate
        autoComplete="off"
      >
        <Feild />
        <FoamButton />
      </Stack>
    </Box>
  );
}

export default UserCreate;
