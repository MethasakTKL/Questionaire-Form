import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/prompt"; 

import NavBar from "./components/navbar";

const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavBar />
      </Box>
    </ThemeProvider>
  );
}
