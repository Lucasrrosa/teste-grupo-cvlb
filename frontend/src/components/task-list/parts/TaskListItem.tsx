import type { ITaskResponseDto } from '../../../types/ITaskResponseDto'
import { FaTrashCan } from "react-icons/fa6";
import { useMarkTaskAsComplete } from '../../../hooks/useMarkTaskAsComplete';
import { useDeleteTask } from '../../../hooks/useDeleteTask';

type Props = {
    item: ITaskResponseDto
}

export default function TaskListItem({ item }: Props) {
  const markAsCompletedMutation = useMarkTaskAsComplete(item.id);
  const deleteMutation = useDeleteTask(item.id);
  
  return (
    <div className={`flex flex-row justify-between gap-2 items-center w-full p-4 border rounded-md border-gray-400 ${item.completed ? 'line-through' : ''}`}>
      <div className='flex flex-row items-center justify-start gap-2'>
        <div>
          {
            markAsCompletedMutation.isPending ? 
              <div className='animate-pulse h-4 w-4 bg-gray-300 rounded-full' />
              :<input onChange={() => { markAsCompletedMutation.mutate(!item.completed)}} type="checkbox" checked={item.completed} className="w-4 h-4" />
          }
        </div>
        <div className="min-w-[500px] flex flex-col items-start justify-between">
          <h3 className='text-2xl font-bold'>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
      <div onClick={() => {deleteMutation.mutate()}} className='p-4 flex flex-col items-center justify-center gap-2 hover:cursor-pointer hover:text-gray-700'>
        <FaTrashCan className='' />
      </div>
    </div>
  )
}