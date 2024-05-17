import { backend } from "../api";

export async function UpdateStatus(id: string) {
  const response = await backend.post(`/reserve/updatestatus`, {
    id,
  });

  return response.data;
}
