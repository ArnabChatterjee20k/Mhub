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
import { FilterComponent } from "./FilterComponent";
import filters from "../../utils/filters";
import { useFilter } from "../../context/FIlterContext/FilterContextProvider";
import {useTheme}  from "@mui/material/styles";
import useMediaQuery  from "@mui/material/useMediaQuery";

const FilterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filter, setFilter } = useFilter();

  const handleModal = () => {
    setIsOpen((state) => !state);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

        <Stack direction={isMobile?"column":"row"} columnGap="10em" rowGap="5em"  justifyContent="center" margin={8} flexWrap="wrap">
          {filters().map(({ name, option, values }) => (
            <FilterComponent
              defaultFilter={filter[option]}
              filterHeading={name}
              valuesArray={values}
              key={name}
              setter={(e) =>
                setFilter((filter) => ({ ...filter, [option]: e.target.value }))
              }
            />
          ))}
        </Stack>

      </Dialog>
    </>
  );
};

export default FilterModal;
