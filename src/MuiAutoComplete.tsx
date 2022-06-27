import React, { useState } from "react";

import { Stack, Autocomplete, TextField } from "@mui/material";

const skills = ["html", "css", "javascript"];
type Skill  = {
  id: number;
  label: string;
};
const skillOptions = skills.map((index, skill) => ({
  id: index + 1,
  label: skill,
}));

function MuiAutoComplete() {
  const [autoComplete, setAutoComplete] = useState<string | null>(null);
  //   console.log({ autoComplete });

  const [skillOption, setOption] = useState<Skill | null>(null);
  console.log({ skillOption });

  // freeSolo means , we can type any string | otherwise ooptions willl show

  return (
    <Stack spacing={2} width="290px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        freeSolo
        // value={autoComplete}
        onChange={(event: any, newValue: string | null) =>
          setAutoComplete(newValue)
        }
      />

      <Autocomplete
        options={skillOptions}
        renderInput={(params) => <TextField {...params} label="skills" />}
        // value={skillOption}
        // onChange={(event: any, newValue: Skill | null) => setOption(newValue)}
      />
    </Stack>
  );
}

export default MuiAutoComplete;
