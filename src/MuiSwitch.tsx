import React, { useState } from "react";

import {
  Box,
  FormControlLabel,
  Switch,
  FormControl,
  FormGroup,
  FormLabel,
} from "@mui/material";

export default function MuiSwitch() {
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  const onToggleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToggleSwitch(event.target.checked);
  };
  console.log(toggleSwitch);

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((eachSkill) => eachSkill !== event.target.value));
    }
  };

  console.log(skills);
  return (
    <Box>
      <FormControlLabel
        control={<Switch checked={toggleSwitch} onChange={onToggleSwitch} />}
        label="Dark Mode"
      />

      <Box>
        <FormControl>
          <FormLabel error>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Switch
                  size="small"
                  color="secondary"
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Switch
                  value="css"
                  size="small"
                  color="secondary"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JAVASCRIPT"
              control={
                <Switch
                  size="small"
                  color="secondary"
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
