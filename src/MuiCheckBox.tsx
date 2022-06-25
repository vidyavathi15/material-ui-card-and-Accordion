import React, { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import {
  Box,
  FormControlLabel,
  FormControl,
  Checkbox,
  FormLabel,
  FormGroup,
} from "@mui/material";

function MuiCheckBox() {
  const [acceptTnc, setAcceptTnc] = useState(false);

  const [skills, setSkills] = useState<string[]>([]);
  console.log(skills)

//   console.log({ acceptTnc });

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(event.target.checked);
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);

    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((eachSkill) => eachSkill !== event.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel 
          label="I accept Terms and conditions"
          control={<Checkbox size="small" color="secondary"  checked={acceptTnc} onChange={onChangeCheckbox} />}
        />
      </Box>

      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnc}
          onChange={onChangeCheckbox}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel error>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel 
              label="HTML"
              control={
                <Checkbox  size="small" color="secondary"
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"  size="small" color="secondary"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JAVASCRIPT"
              control={
                <Checkbox  size="small" color="secondary"
                  value="javascript"
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MuiCheckBox;
