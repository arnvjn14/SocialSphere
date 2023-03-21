// import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import MainPage from "scenes/mainPage";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
// ye sab pata lagao

function App() {
  const mode = useSelector((state) => state.mode); //grabbing the mode from state that we created or grabbing the initial state
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = useSelector((state) => state.token);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
