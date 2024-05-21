import Cookies from "universal-cookie";
import { backend } from "../api";

export interface TotalDispesasRequest {
  day: number;
}

export async function TotalDispesas({ day }: TotalDispesasRequest) {
  const cookie = new Cookies();

  const response = await backend.get(`/expense/totalexpense`, {
    headers: {
      Authorization: `Bearer ${cookie.get("token")}`,
    },
    params: {
      month: day,
    },
  });

  return response.data;
}
