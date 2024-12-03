import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Noto_Sans_Thai } from "next/font/google";
import { withAuth } from "../../auth/ProtectRoute";
import NavBar from "./components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { CalendarMonth } from "@mui/icons-material";
import { LotteryData } from "./types/lotterydata";
import { FaMoneyBillWave } from "react-icons/fa";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

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

const queryClient = new QueryClient();
function LottoPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <Lotto />
    </QueryClientProvider>
  );
}
export default withAuth(LottoPage);

const fetchLotteryData = async (): Promise<LotteryData> => {
  const response = await axios.get("/api/lotto");
  console.log("Test Data", response);
  return response.data.response;
};

function Lotto() {
  const { data: lotteryData, error } = useQuery<LotteryData>({
    queryKey: ["lotteryData"],
    queryFn: fetchLotteryData,
  });

  if (error) {
    return (
      <ThemeProvider theme={theme}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <img src="/error.png" alt="error loading data" width={700} />
        </Box>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Box margin={"1rem"} mt={"5rem"}>
        <Box
          sx={{
            ml: { xs: "1rem", md: "10rem" },
            mr: { xs: "1rem", md: "10rem" },
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "25pt", md: "40pt" }, fontWeight: 700 }}
          >
            ผลสลากกินแบ่งรัฐบาล
          </Typography>
          <Box
            sx={{
              // background: "yellow",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textAlign: "center",
              gap: 0.5,
            }}
          >
            <CalendarMonth sx={{ fontSize: "15pt", color: "#535455" }} />
            <Typography sx={{ fontSize: "15pt" }}>
              ประจำวันที่ : {lotteryData?.displayDate.date}/
              {lotteryData?.displayDate.month}/{lotteryData?.displayDate.year}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "15pt", md: "20pt" },
                fontWeight: 600,
                mt: "1rem",
              }}
            >
              ผลการออกรางวัลสลากกินแบ่งรัฐบาลหกหลัก
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            ml: { xs: "1rem", md: "10rem" },
            mr: { xs: "1rem", md: "10rem" },
          }}
        >
          <Grid container spacing={1} sx={{ mt: "1rem", mb: "5rem" }}>
            <Grid size={{ xs: 6, md: 6, lg: 3 }}>
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
                  {lotteryData?.data?.first?.number[0]?.value ? (
                    <Typography
                      sx={{
                        fontSize: "35pt",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      {lotteryData.data.first.number[0].value}
                    </Typography>
                  ) : (
                    <CircularProgress sx={{ color: "white" }} />
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 0.5,
                  }}
                >
                  <FaMoneyBillWave color="white" />
                  <Typography
                    sx={{ fontSize: "11pt", fontWeight: 700, color: "white" }}
                  >
                    6,000,000 บาท
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 6, lg: 3 }}>
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
                  {lotteryData?.data?.last3f?.number?.length ? (
                    <Typography
                      sx={{
                        fontSize: { xs: "20pt", md: "35pt" },
                        fontWeight: "bold",
                        color: "#535455",
                      }}
                    >
                      {lotteryData.data.last3f.number.map((item, id) => (
                        <span key={id}>{item.value} </span>
                      ))}
                    </Typography>
                  ) : (
                    <CircularProgress size={40} sx={{ color: "#535455" }} />
                  )}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 0.5,
                  }}
                >
                  <FaMoneyBillWave color="#535455" />
                  <Typography
                    sx={{ fontSize: "11pt", fontWeight: 700, color: "#535455" }}
                  >
                    4,000 บาท
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 6, lg: 3 }}>
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
                  {lotteryData?.data?.last3b?.number?.length ? (
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
                  ) : (
                    <CircularProgress size={40} sx={{ color: "#535455" }} />
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 0.5,
                  }}
                >
                  <FaMoneyBillWave color="#535455" />

                  <Typography
                    sx={{ fontSize: "11pt", fontWeight: 700, color: "#535455" }}
                  >
                    4,000 บาท
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 6, lg: 3 }}>
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
                  {lotteryData?.data?.last2?.number?.length ? (
                    <Typography
                      sx={{
                        fontSize: { xs: "20pt", md: "35pt" },
                        fontWeight: "bold",
                        color: "#535455",
                      }}
                    >
                      {lotteryData?.data.last2.number.map((item, id) => (
                        <span key={id}>{item.value} </span>
                      ))}
                    </Typography>
                  ) : (
                    <CircularProgress size={40} sx={{ color: "#535455" }} />
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 0.5,
                  }}
                >
                  <FaMoneyBillWave color="#535455" />

                  <Typography
                    sx={{ fontSize: "11pt", fontWeight: 700, color: "#535455" }}
                  >
                    2,000 บาท
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
                  {lotteryData?.data?.near1?.number?.length ? (
                    <Typography
                      sx={{
                        fontSize: { xs: "20pt", md: "35pt" },
                        fontWeight: "bold",
                        color: "#535455",
                      }}
                    >
                      {lotteryData?.data.near1.number.map((item, id) => (
                        <span key={id}>{item.value} </span>
                      ))}
                    </Typography>
                  ) : (
                    <CircularProgress size={40} sx={{ color: "#535455" }} />
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 0.5,
                  }}
                >
                  <FaMoneyBillWave color="#535455" />

                  <Typography
                    sx={{ fontSize: "11pt", fontWeight: 700, color: "#535455" }}
                  >
                    100,000 บาท
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
                {lotteryData?.data?.second?.number?.length ? (
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
                ) : (
                  <CircularProgress size={40} sx={{ color: "#535455" }} />
                )}
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
                {lotteryData?.data?.third?.number?.length ? (
                  <Grid container>
                    {lotteryData?.data.third.number.map((item, id) => (
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
                ) : (
                  <CircularProgress size={40} sx={{ color: "#535455" }} />
                )}
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
                {lotteryData?.data?.fourth?.number?.length ? (
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
                ) : (
                  <CircularProgress size={40} sx={{ color: "#535455" }} />
                )}
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
                {lotteryData?.data?.fifth?.number?.length ? (
                  <Grid container>
                    {lotteryData?.data.fifth.number.map((item, id) => (
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
                ) : (
                  <CircularProgress size={40} sx={{ color: "#535455" }} />
                )}
              </Box>
            </Grid>
            <Grid size={12} sx={{ mt: "2rem", mb: "2rem" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "15pt", md: "20pt" },
                    fontWeight: 600,
                    mt: "1rem",
                  }}
                >
                  ผลการออกรางวัลสลากกินแบ่งรัฐบาลตัวเลขสามหลัก
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 12, lg: 6 }}>
              <Box
                sx={{
                  background:
                    "linear-gradient(to right bottom, #F7DD5E, #E49720)",
                  height: "10rem",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  sx={{
                    padding: 2,
                    fontWeight: 700,
                    height: "3rem",
                    color: "white",
                  }}
                >
                  รางวัลพิเศษ
                </Typography>
                <Box sx={{ textAlign: "center", height: "4rem" }}>
                  {lotteryData?.n3?.special?.number?.length ? (
                    <Typography
                      sx={{
                        fontSize: { xs: "25pt",sm:"30pt", md: "35pt", lg: "35pt" },
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      {lotteryData?.n3.special.number.map((item, id) => (
                        <span key={id}>{item.value} </span>
                      ))}
                    </Typography>
                  ) : (
                    <CircularProgress size={40} sx={{ color: "#535455" }} />
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 0.5,
                  }}
                >
                  <FaMoneyBillWave color="white" />

                  <Typography
                    sx={{ fontSize: "11pt", fontWeight: 700, color: "white" }}
                  >
                    {lotteryData?.n3.special.price} บาท
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 6, lg: 3 }}>
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
                  รางวัลสองตรง
                </Typography>
                <Box sx={{ textAlign: "center", height: "4rem" }}>
                  {lotteryData?.n3?.straight2?.number?.length ? (
                    <Typography
                      sx={{
                        fontSize: { xs: "25pt",sm:"30pt", md: "35pt", lg: "35pt" },
                        fontWeight: "bold",
                        color: "#535455",
                      }}
                    >
                      {lotteryData?.n3.straight2.number.map((item, id) => (
                        <span key={id}>{item.value} </span>
                      ))}
                    </Typography>
                  ) : (
                    <CircularProgress size={40} sx={{ color: "#535455" }} />
                  )}
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
                  <FaMoneyBillWave color="#535455" />

                  <Typography
                    sx={{ fontSize: "11pt", fontWeight: 700, color: "#535455" }}
                  >
                    {lotteryData?.n3.straight2.price} บาท
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 6, lg: 3 }}>
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
                  รางวัลสามตรง
                </Typography>
                <Box sx={{ textAlign: "center", height: "4rem" }}>
                  {lotteryData?.n3?.straight3?.number?.length ? (
                    <Typography
                      sx={{
                        fontSize: { xs: "25pt",sm:"30pt", md: "35pt", lg: "35pt" },
                        fontWeight: "bold",
                        color: "#535455",
                      }}
                    >
                      {lotteryData?.n3.straight3.number.map((item, id) => (
                        <span key={id}>{item.value} </span>
                      ))}
                    </Typography>
                  ) : (
                    <CircularProgress size={40} sx={{ color: "#535455" }} />
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 0.5,
                  }}
                >
                  <FaMoneyBillWave color="#535455" />

                  <Typography
                    sx={{ fontSize: "11pt", fontWeight: 700, color: "#535455" }}
                  >
                    {lotteryData?.n3.straight3.price} บาท
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 12, lg: 12 }}>
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
                  รางวัลสามสลับหลัก
                </Typography>
                <Box sx={{ textAlign: "center", height: "4rem" }}>
                  {lotteryData?.n3?.shuffle3?.number?.length ? (
                    <Typography
                      sx={{
                        fontSize: { xs: "25pt",sm:"30pt", md: "35pt", lg: "35pt" },
                        fontWeight: "bold",
                        color: "#535455",
                      }}
                    >
                      {lotteryData?.n3.shuffle3.number.map((item, id) => (
                        <span key={id}>{item.value} </span>
                      ))}
                    </Typography>
                  ) : (
                    <CircularProgress size={40} sx={{ color: "#535455" }} />
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 0.5,
                  }}
                >
                  <FaMoneyBillWave color="#535455" />

                  <Typography
                    sx={{ fontSize: "11pt", fontWeight: 700, color: "#535455" }}
                  >
                    {lotteryData?.n3.shuffle3.price} บาท
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
