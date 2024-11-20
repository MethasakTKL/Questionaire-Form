import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import QuestionForm from "./components/QuestionForm";

const theme = createTheme({
  typography: {
    fontFamily: "Prompt, sans-serif",
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavBar/>
        <QuestionForm />
      </Box>
    </ThemeProvider>
  );
}
