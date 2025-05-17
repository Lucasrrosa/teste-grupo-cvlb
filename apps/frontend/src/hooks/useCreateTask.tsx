import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ICreateTaskDto } from "../types/ICreateTaskDto";
import { createTask } from "../requests/taskRequests";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema, type TaskSchemaType } from "../schemas/task.schema";

export function useCreateTask() {
    const queryClient = useQueryClient()
    const { control, handleSubmit, reset } = useForm<TaskSchemaType>({
        resolver: zodResolver(taskSchema),
        defaultValues: {
            title: '',
            description: '',
        },
        mode: 'onBlur',
        reValidateMode: 'onBlur',
    })

    const cleanup = () => {
        reset({});
    }
    const createTaskMutation = useMutation({
        mutationFn: async (data: ICreateTaskDto) => {
            await createTask(data);
        },
        onSuccess: () => {
            cleanup();
            queryClient.invalidateQueries({ queryKey: ['tasks'] })
        },
    });

    const onSubmit = handleSubmit((data) => {
        createTaskMutation.mutate(data);
    });
    
    return { createTaskMutation, control, onSubmit, reset };
    }