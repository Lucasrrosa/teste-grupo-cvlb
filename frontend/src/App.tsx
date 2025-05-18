import NewTaskForm from "./components/new-task-form/NewTaskForm"
import TaskList from "./components/task-list/TaskList"

function App() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-screen bg-gray-100 p-2">
      <h1 className="text-3xl font-bold text-gray-800">Gerenciador de tarefas</h1>
      <NewTaskForm />
      <TaskList />
    </div>
  )
}

export default App


