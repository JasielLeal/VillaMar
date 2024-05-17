import * as z from "zod";

// Ajuste o seu schema Zod para não incluir o checkIn
export const CriarReservaSchema = z.object({
  name: z.string().min(1, "*"),
  cpf: z.string().min(11, "*"),
  roomName: z.string().min(1, "*"),
  checkOut: z.preprocess(
    (arg) => {
      if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
    },
    z.date().refine((date) => !isNaN(date.getTime()), "*")
  ),
  FromWhere: z.string().min(1, "*"),
  value: z.string().min(1, "*"),
  status: z.enum(["false", "true"]),
});
