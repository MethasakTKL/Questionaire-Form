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
      <AppBar position="fixed" elevation={0} sx={{ background: "white" }}>
        <Toolbar>
          <Typography sx={{ color: "black",fontSize:"20pt" }}>
            🦊 Foxbith Questionnaire
          </Typography>
        </Toolbar>
        <Divider />
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Grid container spacing={1}>
              <Grid>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#ff5c00",
                    borderColor: "#ff5c00",
                  }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid>
                <Button
                  variant="contained"
                  sx={{
                    background: "#ff5c00",
                    width: 150,
                  }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
}
