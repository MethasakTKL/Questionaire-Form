import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Noto_Sans_Thai } from "next/font/google";
import axios from "axios";
import { useEffect, useState } from "react";
import { CalendarMonth, Money } from "@mui/icons-material";
import { LotteryData } from "@/pages/types/lotterydata";

export default function ThreeDigitsPrize() {
  const [lotteryData, setLotteryData] = useState<LotteryData | null>(null);
  return (
    <Box>
      <Grid container></Grid>
    </Box>
  );
}
