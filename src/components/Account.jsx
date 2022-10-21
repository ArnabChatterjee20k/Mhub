import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
const Account = () => {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const handleClick = (e) => setAnchor(e.currentTarget);
  const handleClose = (e) => setAnchor(null);

  return (
    <>
      <IconButton onClick={handleClick}>
        <AccountCircle fontSize="large" />
      </IconButton>
      <Menu
      onClose={handleClose}
      onClick={handleClose}
      anchorEl={anchor}
        open={open}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <MenuItem onClick={handleClose}>SignUp</MenuItem>
        <MenuItem onClick={handleClose}>SignIn</MenuItem>
      </Menu>
    </>
  );
};

export default Account;
