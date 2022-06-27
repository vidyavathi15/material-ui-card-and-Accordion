import React from "react";

import {
  Card,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

// here if want include image , use CardMedia 
// In that component is tag type
// image prop is src 
// alt is automatically

function MuiCard() {
  return (
    <Box width="300px" sx={{margin:"30px"}}>
      <Card >
        <CardMedia
          component="img"
          height="120px"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is a javascript libarary , which can be used to build
            user-interfaces
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MuiCard;
