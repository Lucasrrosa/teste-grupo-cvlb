import { useQueryClient, useMutation } from "@tanstack/react-query"
import { deleteTask } from "../requests/taskRequests"

export function useDeleteTask(id: number) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: async () => {
      await deleteTask(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  return mutation
}