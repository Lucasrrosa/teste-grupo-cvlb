import { z } from "zod";

export const taskSchema = z.object({
    title: z.string()
        .min(1, { message: "O título da tarefa é obrigatório" })
        .max(255, { message: "O título da tarefa deve ter no máximo 255 caracteres" }),
    description: z.string().optional(),
})

export type TaskSchemaType = z.infer<typeof taskSchema>;