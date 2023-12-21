import { useState } from "react";
import "./App.css";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([
    "Treinar peito",
    "Treinar triceps",
    "Treinar pernas",
  ]);

  return (
    <div className="w-max m-auto mt-12 gap-7 flex flex-col">
      <span className="text-white font-semibold text-3xl">
        Lista de tarefas
      </span>
      <div className="flex gap-5 flex-col">
        <div className="flex gap-2 flex-col">
          <input
            type="text"
            placeholder="Nova tarefa"
            className="bg-zinc-800 w-full outline-none border-2 border-transparent focus:border-violet-800 text-white px-6 py-2 rounded-md"
          />
          <button className="bg-violet-800 rounded-md py-2 hover:bg-violet-900 font-semibold text-white  w-full">
            Criar tarefa
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {tasks.map((task) => (
            <Task key={task} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
