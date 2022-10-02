import Chip from "@mui/material/Chip";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Close from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import { getLanguage } from "../../utils/getLanguage";

const FilterComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [language, setLanguage] = useState(0);

  const handleModal = () => {
    setIsOpen((state) => !state);
  };

  const languages = getLanguage();

  return (
    <>
      <Paper sx={{ display: "flex", alignItems: "center", padding: 3 }}>
        <Chip
          sx={{ fontSize: "1rem", padding: 2, flexDirection: "row-reverse" }}
          label="Filter"
          onClick={handleModal}
          icon={<FilterAltIcon />}
        />
      </Paper>
      {/* for the dialog to come up */}
      <Dialog fullScreen open={isOpen} onClose={handleModal}>
        <Stack>
          <Paper elevation={2}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Typography variant="h5" marginX={2}>
                Filter
              </Typography>
              <IconButton onClick={handleModal}>
                <Close />
              </IconButton>
            </Toolbar>
          </Paper>
        </Stack>

        <Stack direction="row" columnGap={2}>
          <Drawer
            variant="permanent"
            anchor="left"
            sx={{
              [`& .MuiDrawer-paper`]: {
                position: "static",
                boxSizing: "border-box",
                minHeight:"100vh",
                minWidth:"10vw",
                paddingRight:5
              }
            }}
          >
            <List>
              <ListItem>Hellow</ListItem>
              <ListItem>Hellow</ListItem>
              <ListItem>Hellow</ListItem>
            </List>
          </Drawer>

          <Stack padding={2}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Movie Language
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                {getLanguage().map(({ name, value }) => (
                  <FormControlLabel
                    value={value}
                    control={<Radio />}
                    label={name}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Stack>
        </Stack>
      </Dialog>
    </>
  );
};

export default FilterComponent;
