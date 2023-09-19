import { Box, Typography } from "@mui/material";
import React from "react";

import image from "./dogPlaceholder.jpg";

const AppBlurb = () => {
  return (
    <Box>
      <Typography sx={{ fontSize: "3rem", color: "text.secondary" }}>
        Join the fun!
      </Typography>
      <Typography
        sx={{
          fontSize: "1rem",
          color: "text.secondary",
          marginRight: "5rem",
          marginTop: "2rem",
        }}
      >
        {" "}
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."{" "}
      </Typography>
      <Box sx={{ margin: "20px" }}>
        <Box
          component={"img"}
          src={image}
          alt="headshot"
          sx={{ maxWidth: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default AppBlurb;
