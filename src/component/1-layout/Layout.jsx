import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../2-header/Header";
import Sidee from "../3-sidee/sidee";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            admin: {
              main: blue[900],
            },
            bgBtn: {
              main: grey[300],
            },
          }
        : {
            // palette values for dark mode
            admin: {
              main: blue[900],
            },
            bgBtn: {
              main: grey[700],
            },
          }),
    },
  });

  const [mode, setMode] = React.useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Header
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          mode={mode}
          setMode={setMode}
        />
        <Sidee
          open={open}
          handleDrawerClose={handleDrawerClose}
          theme={theme}
          setOpen={setOpen}
          navigate={navigate}
          location={location}
        />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Typography variant="">
            <Outlet />
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
