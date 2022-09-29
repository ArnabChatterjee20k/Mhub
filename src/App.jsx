import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMemo } from "react";
import SearchBar from "../components/SearchBar";
function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme:dark)");

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: prefersDarkMode ? "dark" : "light",
      },
    });
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar links={["Trending", "Category", "Latest"]} />
      <Container sx={{paddingTop:"10rem"}}>
      </Container>
    </ThemeProvider>
  );
}

export default App;
