import { useCreateTask } from "../../hooks/useCreateTask";
import ControlledInput from "../ControlledInput";
import ControlledTextArea from "../ControlledTextArea";

export default function NewTaskForm() {
    const { control, onSubmit, reset } = useCreateTask()
  return (
    <div className={`flex flex-col justify-between gap-2 items-center w-full p-4 border rounded-md border-gray-400 max-w-[800px]`}>
          <form onSubmit={onSubmit} className="flex flex-col gap-2 items-center w-full">
            <ControlledInput name="title" label="Título" placeholder="Título da tarefa" control={control} />
            <ControlledTextArea name="description" label="Descrição" placeholder="Descrição da tarefa" control={control} />
            <div className="flex justify-end gap-2 w-full">
                <button
                    type="button"
                    onClick={() => {
                        reset();
                    }}
                    className={`border border-gray-800 rounded-md p-2`}
                >
                    Limpar
                </button>
                <button
                    type="submit"
                    className={`bg-gray-800 text-white rounded-md p-2`}
                >
                    Criar
                </button>
            </div>
          </form>
    </div>
  )
}