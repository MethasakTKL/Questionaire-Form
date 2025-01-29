import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Box, CircularProgress } from "@mui/material";

export const withAuth = (Component: React.FC) => {
  return () => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading) {
        if (!user && router.pathname !== "/login") {
          router.push("/login");
        } else if (user && router.pathname === "/login") {
          router.push("/home");
        }
      }
    }, [user, loading, router]);

    if (loading)
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
    return <Component />;
  };
};
