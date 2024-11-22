import { LogoutOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../../../firebase/config";

export default function NavBar() {
  const [email, setEmail] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setEmail(user.email);
    }
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };
  return (
    <Box>
      <AppBar position="static" elevation={0} sx={{ background: "white" }}>
        <Toolbar>
          <Box
            sx={{
              width: "50%",
              // background: "yellow",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Typography sx={{ color: "black", fontSize: "20pt" }}>
              🦊 Foxbith Questionnaire
            </Typography>
          </Box>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1,
            }}
          >
            {email ? (
              <Typography sx={{ color: "black", fontSize: "12pt" }}>
                {email}
              </Typography>
            ) : (
              <Typography sx={{ color: "black", fontSize: "12pt" }}>
                Not logged in
              </Typography>
            )}
            <IconButton onClick={handleLogout}>
              <LogoutOutlined />
            </IconButton>
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
}
