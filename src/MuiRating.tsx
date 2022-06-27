import React, { useState } from "react";

import { Rating, Stack } from "@mui/material";

import FavouriteIcon from "@mui/icons-material/Favorite";
import FavouriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function MuiRating() {
  const [rating, setRating] = useState<number | null>(3);
  const onChangeRating = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setRating(newValue);
  };
                            // stack is a one directional layout, either vertical and row direction not both
  console.log({ rating }); // if we want to insert line divider="vertical" direction and also keep flexItem prop to the divider component
  return (
    <Stack spacing={2} direction="row"  >
      <Rating
        emptyIcon={<FavouriteBorderIcon fontSize="inherit" />}
        icon={<FavouriteIcon fontSize="inherit"   color="error"/>}
        size="large"
        // readOnly // does not change only 3 selected
        highlightSelectedOnly // which is you selected , that only get selected
       
        precision={0.5}
        value={rating}
        onChange={onChangeRating}
      />
            <Rating
        emptyIcon={<FavouriteBorderIcon fontSize="inherit" />}
        icon={<FavouriteIcon fontSize="inherit"   color="error"/>}
        size="large"
        // readOnly // does not change only 3 selected
        highlightSelectedOnly // which is you selected , that only get selected
       
        precision={0.5}
        value={rating}
        onChange={onChangeRating}
      />
    </Stack>
  );
}

export default MuiRating;
