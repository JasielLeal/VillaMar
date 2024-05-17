import Cookies from "universal-cookie";
import { backend } from "../api";

export async function GetUser() {
  const cookie = new Cookies();

  const response = await backend.get(`/user/getuser`, {
    headers: {
      Authorization: `Bearer ${cookie.get("token")}`,
    },
  });

  return response.data;
}
