import { z } from "zod";
import { CardClass, CardType } from "../types/Card";

export const cardSchema = z.object({
  nome: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(40, "Nome muito longo"),
  descricao: z
    .string()
    .min(1, "Descrição obrigatória")
    .max(200, "Descrição muito longa"),
  ataque: z
    .number({ error: "Ataque deve ser um número" })
    .min(0, "Ataque mínimo é 0")
    .max(10, "Ataque máximo é 10"),
  defesa: z
    .number({
      error: "Defesa deve ser um número",
    })
    .min(0, "Defesa mínima é 0")
    .max(10, "Defesa máximo é 10"),
  tipo: z.enum(CardType, { message: "Tipo inválido" }),
  classe: z.enum(CardClass, { error: "Classe inválida" }),
});

export type CardFormData = z.infer<typeof cardSchema>;

export const defaultValues: CardFormData = {
  nome: "",
  tipo: CardType.MAGIA,
  classe: CardClass.QUALQUER,
  ataque: 0,
  defesa: 0,
  descricao: "",
};
