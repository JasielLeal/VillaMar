import { FieldValues } from "react-hook-form";
import { backend } from "../api";
import Cookies from "universal-cookie";

export async function criarReserva(data: FieldValues) {
  const cookie = new Cookies();
  const response = await backend.post(`reserve/create`, {
    name: data.name,
    cpf: data.cpf,
    value: data.value,
    FromWhere: data.FromWhere,
    roomName: data.roomName,
    checkIn: data.checkIn,
    checkOut: data.checkOut,
    status: data.status
  },
  {
    headers: {
      Authorization: `Bearer ${cookie.get("token")}`,
    },
  }
)

  return response;
}
