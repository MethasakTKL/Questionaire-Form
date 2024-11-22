"use client";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Prompt } from "next/font/google";
import LoginPage from "./login";

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
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <LoginPage />
    </ThemeProvider>
  );
}
