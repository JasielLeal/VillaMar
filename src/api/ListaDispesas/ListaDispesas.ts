import Cookies from "universal-cookie";
import { backend } from "../api";

export interface ListaDispesasRequest {
  day: number;
}

export async function ListaDispesas({ day }: ListaDispesasRequest) {
  const cookie = new Cookies();

  const response = await backend.get(`/expense/month`, {
    headers: {
      Authorization: `Bearer ${cookie.get("token")}`,
    },
    params: {
        month: day
    }
  });

  return response.data;
}
