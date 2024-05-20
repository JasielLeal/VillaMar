import Cookies from "universal-cookie";
import { backend } from "../api";

export async function MonthlyBookingsByChannel() {
  const cookie = new Cookies();

  const response = await backend.get(`reserve/bookingsbychannel`, {
    headers: {
      Authorization: `Bearer ${cookie.get("token")}`,
    },
  });

  return response.data;
}
