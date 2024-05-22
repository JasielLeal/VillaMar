import Cookies from "universal-cookie";
import { backend } from "../api";

const cookie = new Cookies();

export async function DeleteDespesa(id: string) {
  const response = await backend.delete(`/expense/delete`, {
    data: { id },
    headers: {
      Authorization: `Bearer ${cookie.get("token")}`,
    },
  });
  return response
}
