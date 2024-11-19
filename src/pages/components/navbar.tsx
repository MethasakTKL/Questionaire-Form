import {
  AppBar,
  Box,
  Button,
  Divider,
  Grid2,
  Toolbar,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

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
