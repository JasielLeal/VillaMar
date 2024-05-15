import Cookies from "universal-cookie";
import { backend } from "../api";

export interface FindByDayRequest {
  day: string;
}

export async function FindByDay({ day }: FindByDayRequest) {
  const cookie = new Cookies();

  console.log(backend, day)

  const response = await backend.get(`/reserve/${day}`, {
    headers: {
      Authorization: `Bearer ${cookie.get("token")}`,
    },
  });

  return response.data;
}
