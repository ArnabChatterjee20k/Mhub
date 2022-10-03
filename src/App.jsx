import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMemo } from "react";
import { DrawerContextProvider } from "./context/DrawerContext/DrawerContextProvider";
import TopMovies from "./pages/TopMovies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterContextProvider from "./context/FIlterContext/FilterContextProvider";

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
      <FilterContextProvider>
      <DrawerContextProvider>
        <Navbar links={["Trending", "Category", "Latest"]} />
      </DrawerContextProvider>
      <Container sx={{ marginTop: "14rem" }} id="container">
        <BrowserRouter>

          <Routes>
            <Route path="/" exact element={<TopMovies />} />
          </Routes>
        </BrowserRouter>
      </Container>
      </FilterContextProvider>
    </ThemeProvider>
  );
}

export default App;
