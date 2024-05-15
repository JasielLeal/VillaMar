import * as z from "zod";

// Ajuste o seu schema Zod para não incluir o checkIn
export const CriarReservaSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  cpf: z.string().min(11, "CPF deve ter no mínimo 11 caracteres"),
  roomName: z.string().min(1, "Quarto é obrigatório"),
  checkOut: z.preprocess(
    (arg) => {
      if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
    },
    z.date().refine((date) => !isNaN(date.getTime()), "Data inválida")
  ),
  FromWhere: z.string().min(1, "Origem é obrigatória"),
  value: z.string().min(1, "Valor é obrigatório"),
  status: z.enum(["true", "false"]),
});
