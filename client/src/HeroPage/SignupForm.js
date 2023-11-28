import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";

const SignUpForm = () => {
  const { create_owner } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <Stack component="form">
      <Typography>Sign up</Typography>
      <Box>
        <TextField
          label="First Name"
          variant="filled"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></TextField>
        <TextField
          label="Last Name"
          variant="filled"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></TextField>
      </Box>
      <TextField
        label="Email"
        variant="filled"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextField>
      <TextField
        label="Password"
        type="password"
        variant="filled"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextField>
      <Button
        variant="contained"
        onClick={() => {
          create_owner(firstName, lastName, password, email);
        }}
      >
        Create Account
      </Button>
    </Stack>
  );
};

export default SignUpForm;
