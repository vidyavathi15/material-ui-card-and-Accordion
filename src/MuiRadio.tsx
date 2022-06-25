import React, {useState} from "react";

import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormHelperText
} from "@mui/material";

function MuiRadio() {

    const [value, setValue] = useState("")
    console.log({value})
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience">Years of Experience</FormLabel>

        <RadioGroup row name="job-experience"  value={value} onChange={(e) => setValue(e.target.value)}>
          <FormControlLabel control={<Radio />} label="0-2"  value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-9" value="6-9" />
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default MuiRadio;
