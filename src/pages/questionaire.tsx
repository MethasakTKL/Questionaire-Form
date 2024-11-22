import React from "react";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import QuestionForm from "./components/QuestionForm";
import { Prompt } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/router";
//firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";

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
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    const unauthen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        router.push("/login");
      }
    });
    return () => unauthen();
  }, [auth, router]);
  if (isLoggedIn == false) {
    return null;
  }
  const user = auth.currentUser;
  console.log(user);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavBar />
        <QuestionForm />
      </Box>
    </ThemeProvider>
  );
}
