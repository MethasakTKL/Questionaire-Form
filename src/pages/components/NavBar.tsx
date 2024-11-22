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

export default function NavBar() {
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
              // background: "yellow",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography sx={{ color: "black", fontSize: "12pt" }}>
              test@email.com
            </Typography>
            <IconButton href="/login" >
              <LogoutOutlined />
            </IconButton>
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
}
