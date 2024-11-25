"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../../firebase/config";
import { Box, CircularProgress } from "@mui/material";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      router.push("/questionaire");
    } else {
      router.push("/login");
    }
  }, [router]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <CircularProgress sx={{ color: "#ff5d01" }} size={60} />
    </Box>
  );
}
