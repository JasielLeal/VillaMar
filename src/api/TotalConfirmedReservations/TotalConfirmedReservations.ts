import Cookies from "universal-cookie";
import { backend } from "../api";

export async function TotalConfirmedReservations() {
  const cookie = new Cookies();

  const response = await backend.get(`reserve/totalreserves`, {
    headers: {
      Authorization: `Bearer ${cookie.get("token")}`,
    },
  });

  return response.data;
}
