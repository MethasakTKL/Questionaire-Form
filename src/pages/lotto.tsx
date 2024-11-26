import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Noto_Sans_Thai } from "next/font/google";
import { withAuth } from "../../auth/ProtectRoute";
import NavBar from "./components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Money } from "@mui/icons-material";

const font = Noto_Sans_Thai({
  weight: ["100", "300", "400", "500", "600", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: font.style.fontFamily,
  },
});

interface LotteryData {
  displayDate: {
    date: string;
    month: string;
    year: string;
  };
  data: {
    first: {
      number: { value: string }[];
    };
    second: {
      number: { value: string }[];
    };

    third: {
      number: { value: string }[];
    };
    fourth: {
      number: { value: string }[];
    };
    fifth: {
      number: { value: string }[];
    };
    last3f: {
      number: { value: string }[];
    };
    last3b: {
      number: { value: string }[];
    };
    last2: {
      number: { value: string }[];
    };
    near1: {
      number: { value: string }[];
    };
  };
}

function LottoPage() {
  const [lotteryData, setLotteryData] = useState<LotteryData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = "/api/lotto";
      try {
        const response = await axios.get(apiUrl);
        setLotteryData(response.data.response);
        console.log("Lottery Data:", response.data);
        console.log("Lottery Data:", response.data.response.data.last3f);
      } catch (err) {
        console.error("Error", err);
        setError("Failed to fetch");
      }
    };

    fetchData();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Box margin={"1rem"}>
        <Box
          sx={{
            ml: { xs: "2rem", md: "10rem" },
            mr: { xs: "2rem", md: "10rem" },
          }}
        >
          <Typography sx={{ fontSize: "40pt", fontWeight: 700 }}>
            ผลสลากกินแบ่งรัฐบาล
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "15pt" }}>
            ประจำวันที่ : {lotteryData?.displayDate.date}/
            {lotteryData?.displayDate.month}/{lotteryData?.displayDate.year}
          </Typography>
        </Box>
        <Box
          sx={{
            ml: { xs: "2rem", md: "10rem" },
            mr: { xs: "2rem", md: "10rem" },
          }}
        >
          <Grid container spacing={1} sx={{ mt: "1rem" }}>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box
                sx={{
                  background:
                    "linear-gradient(to right bottom, #FF914D, #ff5d01)",

                  height: "10rem",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  sx={{
                    padding: 2,
                    color: "white",
                    fontWeight: 700,
                    height: "3rem",
                  }}
                >
                  รางวัลที่ 1
                </Typography>
                <Box sx={{ textAlign: "center", height: "4rem" }}>
                  <Typography
                    sx={{
                      fontSize: "35pt",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {lotteryData?.data.first.number[0]?.value}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    // background: "yellow",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 0.5,
                  }}
                >
                  <Money sx={{ fontSize: "15pt", color: "white" }} />
                  <Typography
                    sx={{
                      fontSize: "11pt",
                      fontWeight: 700,
                      height: "3rem",
                      color: "white",
                    }}
                  >
                    6,000,000
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Box
                sx={{
                  background: "#e5e5e5",
                  height: "10rem",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  sx={{
                    padding: 2,
                    fontWeight: 700,
                    height: "3rem",
                    color: "#535455",
                  }}
                >
                  เลขหน้า 3 ตัว
                </Typography>
                <Box sx={{ textAlign: "center", height: "4rem" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "20pt", md: "35pt" },
                      fontWeight: "bold",
                      color: "#535455",
                    }}
                  >
                    {lotteryData?.data.last3f.number.map((item, id) => (
                      <span key={id}>{item.value} </span>
                    ))}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    // background: "yellow",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 0.5,
                  }}
                >
                  <Money sx={{ fontSize: "15pt", color: "#535455" }} />
                  <Typography
                    sx={{ fontSize: "11pt", fontWeight: 700, color: "#535455" }}
                  >
                    4,000
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Box
                sx={{
                  background: "#e5e5e5",
                  height: "10rem",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  sx={{
                    padding: 2,
                    fontWeight: 700,
                    color: "#535455",
                    height: "3rem",
                  }}
                >
                  เลขท้าย 3 ตัว
                </Typography>
                <Box sx={{ textAlign: "center", height: "4rem" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "20pt", md: "35pt" },
                      fontWeight: "bold",
                      color: "#535455",
                    }}
                  >
                    {lotteryData?.data.last3b.number.map((item, id) => (
                      <span key={id}>{item.value} </span>
                    ))}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    // background: "yellow",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 0.5,
                  }}
                >
                  <Money sx={{ fontSize: "15pt", color: "#535455" }} />
                  <Typography
                    sx={{ fontSize: "11pt", fontWeight: 700, color: "#535455" }}
                  >
                    4,000
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box
                sx={{
                  background: "#e5e5e5",
                  height: "10rem",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  sx={{
                    padding: 2,
                    fontWeight: 700,
                    height: "3rem",
                    color: "#535455",
                  }}
                >
                  เลขท้าย 2 ตัว
                </Typography>
                <Box sx={{ textAlign: "center", height: "4rem" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "25pt", md: "35pt" },
                      fontWeight: "bold",
                      color: "#535455",
                    }}
                  >
                    {lotteryData?.data.last2.number.map((item, id) => (
                      <span key={id}>{item.value} </span>
                    ))}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    // background: "yellow",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 0.5,
                  }}
                >
                  <Money sx={{ fontSize: "15pt", color: "#535455" }} />
                  <Typography
                    sx={{ fontSize: "11pt", fontWeight: 700, color: "#535455" }}
                  >
                    2,000
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <Box
                sx={{
                  background: "#e5e5e5",
                  height: "10rem",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  sx={{
                    padding: 2,
                    fontWeight: 700,
                    height: "3rem",
                    color: "#535455",
                  }}
                >
                  รางวัลข้างเคียงรางวัลที่ 1
                </Typography>
                <Box sx={{ textAlign: "center", height: "4rem" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "20pt", md: "30pt" },
                      fontWeight: "bold",
                      color: "#535455",
                    }}
                  >
                    {lotteryData?.data.near1.number.map((item, id) => (
                      <span key={id}>{item.value} </span>
                    ))}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    // background: "yellow",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 0.5,
                  }}
                >
                  <Money sx={{ fontSize: "15pt", color: "#535455" }} />
                  <Typography
                    sx={{ fontSize: "11pt", fontWeight: 700, color: "#535455" }}
                  >
                    100,000
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }} sx={{ mt: "2rem" }}>
              <Divider />
              <Typography
                sx={{ padding: 2, color: "#ff5d01", fontWeight: 700 }}
              >
                รางวัลที่ 2 มี 5 รางวัล (รางวัลละ 200,000 บาท)
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <Grid container>
                  {lotteryData?.data.second.number.map((item, id) => (
                    <Grid size={2.4} key={id}>
                      <Typography
                        sx={{
                          fontSize: { xs: "15pt", md: "20pt" },
                          fontWeight: "bold",
                          color: "#535455",
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }} sx={{ mt: "2rem" }}>
              <Divider />
              <Typography
                sx={{ padding: 2, color: "#ff5d01", fontWeight: 700 }}
              >
                รางวัลที่ 3 มี 10 รางวัล (รางวัลละ 80,000 บาท)
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <Grid container>
                  {lotteryData?.data.third.number.map((item, id) => (
                    <Grid size={2.4} key={id}>
                      <Typography
                        sx={{
                          fontSize: "15pt",
                          fontWeight: 700,
                          color: "#535455",
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }} sx={{ mt: "2rem" }}>
              <Divider />
              <Typography
                sx={{ padding: 2, color: "#ff5d01", fontWeight: 700 }}
              >
                รางวัลที่ 4 มี 50 รางวัล (รางวัลละ 40,000 บาท)
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <Grid container>
                  {lotteryData?.data.fourth.number.map((item, id) => (
                    <Grid size={2.4} key={id}>
                      <Typography
                        sx={{
                          fontSize: "13pt",
                          fontWeight: 500,
                          color: "#535455",
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }} sx={{ mt: "2rem" }}>
              <Divider />
              <Typography
                sx={{ padding: 2, color: "#ff5d01", fontWeight: 700 }}
              >
                รางวัลที่ 5 มี 100 รางวัล (รางวัลละ 20,000 บาท)
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <Grid container>
                  {lotteryData?.data.fifth.number.map((item, id) => (
                    <Grid size={2.4} key={id}>
                      <Typography
                        sx={{
                          fontSize: "13pt",
                          color: "#535455",
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default withAuth(LottoPage);
