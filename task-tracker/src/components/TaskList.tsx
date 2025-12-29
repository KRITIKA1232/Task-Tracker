import type { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({ tasks, setTasks }: TaskListProps) => {
  if (tasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
};

export default TaskList;
