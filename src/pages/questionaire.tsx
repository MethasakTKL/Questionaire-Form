import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import QuestionForm from "./components/QuestionForm";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: prompt.style.fontFamily,
  },
});
export default function QuestionnairePage() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavBar />
        <QuestionForm />
      </Box>
    </ThemeProvider>
  );
}
