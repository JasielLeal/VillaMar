import { z } from "zod";

export const CriarUsuarioSchema = z.object({
  name: z.string().min(2, "*"),
  secondName: z.string().min(2, "*"),
  isOwner: z.string(),
  email: z.string().email({ message: "*" }),
  password: z.string().min(6, "*"),
});
