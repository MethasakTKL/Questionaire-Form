import { AppBar, Box, Divider, Toolbar, Typography } from "@mui/material";

export default function NavBar() {
  return (
    <Box>
      <AppBar position="static" elevation={0} sx={{ background: "white" }}>
        <Toolbar>
          <Typography sx={{ color: "black", fontSize: "20pt" }}>
            🦊 Foxbith Questionnaire
          </Typography>
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
}
