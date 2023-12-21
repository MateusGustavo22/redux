import { Trash2 } from "lucide-react";

interface TaskProps {
  task: string;
}

export default function Task({ task }: TaskProps) {
  return (
    <div className="px-6 py-4 bg-zinc-800 justify-between flex gap-6 rounded-md">
      <span className="text-white">{task}</span>
      <div className="flex gap-4 items-center justify-center">
        <input type="checkbox" className="w-5 h-5 cursor-pointer" />
        <button>
          <Trash2 color="rgb(124, 58, 237)" />
        </button>
      </div>
    </div>
  );
}
