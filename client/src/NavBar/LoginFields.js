import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";

const LoginFields = () => {
  const { isAuthed, login, logout } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return isAuthed ? (
    <Button variant="contained" onClick={logout}>
      Logout
    </Button>
  ) : (
    <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <TextField
        label="Email"
        variant="filled"
        sx={{ backgroundColor: "#fff" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label="Password"
        variant="filled"
        type="password"
        sx={{ backgroundColor: "#fff" }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={() => login(email, password)}>
        Login
      </Button>
    </Box>
  );
};

export default LoginFields;
