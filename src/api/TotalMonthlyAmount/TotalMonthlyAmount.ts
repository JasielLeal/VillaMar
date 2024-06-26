import Cookies from "universal-cookie";
import { backend } from "../api";

export interface TotalAmountRequest {
  day: number;
}

export async function TotalMonthlyAmount({ day }: TotalAmountRequest) {
  const cookie = new Cookies();

  const response = await backend.get(`reserve/monthlyamount`, {
    headers: {
      Authorization: `Bearer ${cookie.get("token")}`,
    },
    params: {
      month: day,
    },
  });

  return response.data;
}
