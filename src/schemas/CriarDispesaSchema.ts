import { z } from "zod";

export const CriarDispesaSchema = z.object({
  name: z.string().min(2, "*"),
  value: z.string().min(2, "*"),
});
