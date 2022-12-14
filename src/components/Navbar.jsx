import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu"
import Drawer from "./Drawer";
import Account from "./Account";
import {
  useDrawer,
} from "../context/DrawerContext/DrawerContextProvider";

import {useTheme}  from "@mui/material/styles";
import useMediaQuery  from "@mui/material/useMediaQuery";
import FilterModal from "./Filter/FilterModal";

const Navbar = ({ links }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  console.log("🚀 ~ file:  ~ line 25 ~ Navbar ~ isMobile", isMobile)

  const {visible,setVisible} = useDrawer();
  return (
      <Box>
        <AppBar component="nav">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" onClick={()=>setVisible(state=>!state)}>
              {isMobile && <MenuIcon />}
            </IconButton>
            
            <Typography variant="h5">
              MHub
            </Typography>

            {/* links */}
            {!isMobile
             &&
            <Stack
            direction={"row"}
            gap="1em"
            margin="2em"
            alignItems={"center"}
            sx={{ width: "100%" }}
          >
            {links.map((link) => (
              <Link underline="none" key={link}>{link}</Link>
            ))}
          </Stack>
            }
            <Stack direction="row" gap="2em" marginLeft="auto">
              {/* <SearchBar /> */}
              <Account/>
            </Stack>
          </Toolbar>
          
          <FilterModal/>
        </AppBar>
        {isMobile && <Drawer />}
        {/* <Box marginTop="4rem">
          <FilterComponent/>
        </Box> */}
      </Box>
  );
};

export default Navbar;
