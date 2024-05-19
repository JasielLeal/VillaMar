import Cookies from "universal-cookie";
import { backend } from "../api";

export async function TotalMonthlyAmount() {
  const cookie = new Cookies();

  const response = await backend.get(`reserve/monthlyamount`, {
    headers: {
      Authorization: `Bearer ${cookie.get("token")}`,
    },
  });

  return response.data;
}
