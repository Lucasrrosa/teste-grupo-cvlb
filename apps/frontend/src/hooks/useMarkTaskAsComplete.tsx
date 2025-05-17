import { useQueryClient, useMutation } from "@tanstack/react-query"
import { setTaskCompletion } from "../requests/taskRequests"

export function useMarkTaskAsComplete(id: number) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: async (completed: boolean) => {
      await setTaskCompletion(id, completed)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })

  return mutation
}