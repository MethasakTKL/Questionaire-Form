import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { withAuth } from "../../auth/ProtectRoute";
import NavBar from "./components/NavBar";

function HomePage() {
  return (
    <Box>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin:"2rem",
          mt: "6rem",
        }}
      >
        <Grid container spacing={2} sx={{}}>
          
          <Grid size={{xs:12,md:6}}>
            <Card sx={{}}>
              <CardActionArea href="/questionaire">
                <CardMedia
                  component="img"
                  height="300rem"
                  image="/questionaire.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontFamily="Prompt"
                  >
                    Foxbith Questionaire
                  </Typography>
                  <Typography
                    variant="body2"
                    fontFamily="Prompt"
                    sx={{ color: "text.secondary" }}
                  >
                    แบบฟอร์มคำถาม Foxbith Questionaire
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid size={{xs:12,md:6}}>
            <Card sx={{ }}>
              <CardActionArea href="/lotto">
                <CardMedia
                  component="img"
                  height="300rem"
                  image="/lottery.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontFamily="Prompt"
                  >
                    ผลสลากกินแบ่งรัฐบาล
                  </Typography>
                  <Typography
                    variant="body2"
                    fontFamily="Prompt"
                    sx={{ color: "text.secondary" }}
                  >
                    ตรวจผลสลากกินแบ่งรัฐบาลประจำวันที่ 16 พฤศจิกายน 2567
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default withAuth(HomePage);
