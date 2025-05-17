import { useQuery } from '@tanstack/react-query'
import { getAllTasks } from '../../requests/taskRequests'
import TaskListItem from './parts/TaskListItem'
import LoadingItem from './parts/LoadingItem'

export default function TaskList() {
    const { data, isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: getAllTasks,
    })
  return (
    <div className="flex flex-col items-center justify-start gap-2 h-screen">
        <h1 className="text-3xl font-bold underline">Task list</h1>
        <div className="flex flex-col justify-center gap-2 items-center p-4 max-w-[800px]">
        {isLoading ? (
            <LoadingItem />
        ) : (
            <>
                {data?.map((task) => (
                    <TaskListItem key={task.id} item={task} />
                ))}
            </>
        )}
        </div>
    </div>
  )
}