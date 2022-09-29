import React from "react";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import SearchBar from "./SearchBar";
import AccountCircle  from "@mui/icons-material/AccountCircle";
const Navbar = ({ links }) => {
  return (
    <Box>
      <AppBar component="nav">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Stack direction={"row"} gap="1em" margin="2em" alignItems={"center"}  sx={{width:"100%"}}>
            <Typography variant="h5" marginRight="2em">
              MHub
            </Typography>
            {links.map((link) => (
              <Link underline="none">{link}</Link>
            ))}
          </Stack>
          <Stack direction="row" gap="2em" marginLeft="auto">
            <SearchBar />
            <IconButton >
              <AccountCircle fontSize="large"/>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
