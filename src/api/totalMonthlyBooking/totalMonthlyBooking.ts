import Cookies from "universal-cookie";
import { backend } from "../api";

export async function totalMonthlyBooking() {
  const cookie = new Cookies();

  const response = await backend.get(`reserve/monthlybooking`, {
    headers: {
      Authorization: `Bearer ${cookie.get("token")}`,
    },
  });

  return response.data;
}
