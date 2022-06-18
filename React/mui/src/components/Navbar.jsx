import {
  AppBar,
  Avatar,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import React, { useState } from "react";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import MailIcon from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  cursor: "pointer",

  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",

  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ cursor: "pointer", display: { xs: "none", sm: "block" } }}
        >
          DEV Infinity
        </Typography>
        <AllInclusiveIcon
          sx={{ cursor: "pointer", display: { xs: "block", sm: "none" } }}
        />
        <Search>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={10} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={5} color="error">
            <Notifications />
          </Badge>
          <Avatar
            src="./"
            sx={{ width: 30, height: 30, marginBottom: 0.5 }}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar src="./" sx={{ width: 30, height: 30, marginBottom: 0.5 }} />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

// check this...
// https://codesandbox.io/s/use-ref-for-anchorel-forked-1pvh1?file=/demo.js
