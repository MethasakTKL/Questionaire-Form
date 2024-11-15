import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/navbar";
import QuestionForm from "./components/questionform";
import Grid from "@mui/material/Grid2";

import "@fontsource/prompt";

const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container>
          <Grid size={12}>
            <NavBar />
          </Grid>
          <Grid size={12}>
            <QuestionForm />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
