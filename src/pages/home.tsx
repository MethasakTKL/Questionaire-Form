import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { withAuth } from "../../auth/ProtectRoute";
import { LogoutOutlined } from "@mui/icons-material";

function HomePage() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "black",
        }}
      >
        <Grid container spacing={2}>
          <Grid size={6} sx={{}}>
            <Box sx={{ width: "20rem", height: "10rem" }}>
              <Button
                variant="contained"
                href="/questionaire"
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 5,
                  background: "#ff5d01",
                  textAlign:"center"
                }}
              >
                <Typography variant="h4" sx={{ textTransform: "none" }}>
                  Foxbit Questionaire
                </Typography>
              </Button>
            </Box>
          </Grid>
          <Grid size={6} sx={{}}>
            <Box sx={{ width: "20rem", height: "10rem" }}>
              <Button
                variant="contained"
                href="/lotto"
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 5,
                  background: "#ff5d01",
                }}
              >
                <Typography variant="h4" sx={{ textTransform: "none" }}>
                  Lotto
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default withAuth(HomePage);
