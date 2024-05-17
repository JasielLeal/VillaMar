import Cookies from "universal-cookie";
import { backend } from "../api";

export async function UpdateStatus(id: string) {

  const cookie = new Cookies();
  const response = await backend.post(
    `/reserve/updatestatus`,
    {
      id,
    },
    {
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
      },
    }
  );

  return response;
}
