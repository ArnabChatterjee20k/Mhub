import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const FilterComponent = ({ filterHeading,setter ,defaultFilter, valuesArray }) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{filterHeading}</FormLabel>
      <RadioGroup
        onChange={setter}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={defaultFilter}
        name="radio-buttons-group"
      >
        {valuesArray.map(({ name, value}) => (
          <FormControlLabel value={value} control={<Radio />} label={name}/>
        ))}
      </RadioGroup>
    </FormControl>
  );
};
