import { FieldValues } from "react-hook-form";
import { backend } from "../api";
import Cookies from "universal-cookie";

export async function criarDespesa(data: FieldValues) {
  const cookie = new Cookies();
  const response = await backend.post(
    `/expense/create`,
    {
      name: data.name,
      value: data.value,
    },
    {
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
      },
    }
  );

  return response;
}
