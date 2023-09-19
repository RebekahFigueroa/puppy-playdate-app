import { Grid } from "@mui/material";
import React from "react";
import AppBlurb from "./AppBlurb";
import SignUpForm from "./SignupForm";

const HeroPage = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{ minHeight: "100%", display: "flex", alignItems: "center" }}
    >
      <Grid item xs={1}></Grid>
      <Grid item xs={4}>
        <AppBlurb />
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
        <SignUpForm />
      </Grid>
    </Grid>
  );
};

export default HeroPage;
