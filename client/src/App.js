import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroPage from "./HeroPage/HeroPage";
import NavBar from "./NavBar/NavBar";
import ProfilePage from "./ProfilePage/ProfilePage";
import { AuthProvider, useAuthContext } from "./contexts/AuthContext";

const darkTheme = createTheme({
  // palette: {
  //   primary: {
  //     light: "#757ce8",
  //     main: "#3f50b5",
  //     dark: "#002884",
  //     contrastText: "#fff",
  //   },
  //   secondary: {
  //     light: "#ff7961",
  //     main: "#f44336",
  //     dark: "#ba000d",
  //     contrastText: "#fff",
  //   },
  // },
});

const BodyContent = () => {
  const { isAuthed } = useAuthContext();
  return (
    <>
      <NavBar />
      <Box sx={{ height: "calc(100vh - 3rem)" }}>
        <Routes>
          <Route path="/" Component={isAuthed ? ProfilePage : HeroPage} exact />
          {/* <Route path="/modify-budget" Component={EditBudgetMainPage} />
          <Route path="/modify-household" Component={ModifyHouseholdMainPage} />
          <Route path="/modify-budget-item" Component={BudgetItemsMainPage} />
          <Route path="/view-budget" Component={ViewBudgetMainPage} /> */}
        </Routes>
      </Box>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AuthProvider>
          <BodyContent />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
