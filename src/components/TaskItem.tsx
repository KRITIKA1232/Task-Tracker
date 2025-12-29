import type { Task } from "../types/task";
import "../index.css";

interface TaskItemProps {
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskItem = ({ task, setTasks }: TaskItemProps) => {
  const toggleStatus = () => {
    setTasks(prev =>
      prev.map(t =>
        t.id === task.id
          ? { ...t, status: t.status === "Pending" ? "Done" : "Pending" }
          : t
      )
    );
  };

  const deleteTask = () => {
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        marginBottom: "8px",
        border: "1px solid #d6ccccff",
        borderRadius: "5px",
      }}
    >
      <div>
        <h4>{task.title}</h4>
        <small>{task.dueDate}</small>
        <p>
        Status:{" "}
        <span className={task.status === "Done" ? "status-done" : "status-pending"}>
        {task.status}
    </span>
</p>

      </div>

      <div>
        <button onClick={toggleStatus}>
          {task.status === "Pending" ? "Mark Done" : "Undo"}
        </button>
        <button onClick={deleteTask}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
