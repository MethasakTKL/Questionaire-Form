import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import AvatarMenu from "./AvatarMenu";
import MenuDrawer from "./MenuDrawer";
import React from "react";
import { useRouter } from "next/router";
import { auth } from "../../../firebase/config";

export default function NavBar() {
  const [email, setEmail] = React.useState<string | null>(null);
  const router = useRouter();

  React.useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setEmail(user.email);
    }
  }, [auth]);
  return (
    <Box mb={{ xs: "3.5rem", md: "4rem" }}>
      <AppBar position="fixed" elevation={0} sx={{ background: "white" }}>
        <Toolbar sx={{ display: { xs: "none", md: "flex" } }}>
          <Box
            sx={{
              width: "50%",
              // background: "yellow",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <img src="/foxbith.png" alt="Foxbith" width={100} />

            {/* <Typography
                sx={{
                  color: "black",
                  fontSize: { xs: "13pt", sm: "15pt", md: "18pt" },
                }}
              >
                🦊 Foxbith
              </Typography> */}
          </Box>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button href="/home">
              <Typography sx={{ color: "#535455" }}>Home</Typography>
            </Button>
            <Button href="/questionaire">
              <Typography sx={{ color: "#535455" }}>Questionaire</Typography>
            </Button>
            <Button href="/lotto">
              <Typography sx={{ color: "#535455" }}>Lottery</Typography>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "50%",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1,
            }}
          >
            {email ? (
              <Typography
                sx={{ color: "#535455", fontSize: { xs: "10pt", md: "12pt" } }}
              >
                {email}
              </Typography>
            ) : (
              <Typography sx={{ color: "black", fontSize: "12pt" }}>
                Not logged in
              </Typography>
            )}
            <AvatarMenu />
          </Box>
        </Toolbar>
        <Toolbar sx={{ display: { xs: "flex", md: "none" } }}>
          <MenuDrawer />
          <Box
            sx={{
              width: "100%",
              // background: "yellow",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="/foxbith.png" alt="Foxbith" width={100} />
          </Box>
          <AvatarMenu />
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
}
