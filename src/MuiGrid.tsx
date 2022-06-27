import React from "react";

import { Grid, Stack, Box, Paper } from "@mui/material";

function MuiGrid() { // columnSpacing means vertical space will come 
                    // rowspacing means row wise space will come
                    // xs for mobile deivices
                    // sm for tablet devices
                    // md for desktop devices
                    // lg/xl for large and extra large devices 
                    // paper padding applied in sx prop and elevation for shadow thickness
  return (
    <Paper sx={{padding: "32px"}} elevation={4}>

   
    <Stack direction="row"> 
      <Grid container my={4} rowSpacing={2} columnSpacing={1}> 
        <Grid item  xs = "auto" sm={3} md={4} lg={6}>
          <Box bgcolor="primary.light" p={2} >Item1</Box>
        </Grid>
        <Grid item xs={6} sm={3} md={4} lg={6}>
          <Box bgcolor="primary.light" p={2}>Item2</Box>
        </Grid>
        <Grid item xs={6} sm={3}  md={4} lg={6} >
          <Box bgcolor="primary.light" p={2}>Item3</Box>
        </Grid>
        <Grid item xs={6} sm={3}  md={4} lg={6}>
          <Box bgcolor="primary.light" p={2}>Item4</Box>
        </Grid>
       
      </Grid>
    </Stack>
    </Paper>
  );
}

export default MuiGrid;
