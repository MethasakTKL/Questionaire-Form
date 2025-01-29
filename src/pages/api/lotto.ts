import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const Url = "https://www.glo.or.th/api/lottery/getLatestLottery";
  try {
    const response = await axios.post(Url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch" });
  }
}
