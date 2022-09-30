import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMemo } from "react";
import { DrawerContextProvider } from "./context/DrawerContext/DrawerContextProvider";
import TopMovies from "./pages/TopMovies";
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
      <DrawerContextProvider>
        <Navbar links={["Trending", "Category", "Latest"]} />
      </DrawerContextProvider>
      <Container sx={{paddingTop:"10rem"}} id="container">
        {/* <SearchBar/> */}
        <TopMovies/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
