import { useState } from "react";
import type { Task } from "../types/task";

interface TaskFormProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskForm = ({ setTasks }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !dueDate) return;

    const newTask: Task = {
      id: Date.now(),
      title,
      dueDate,
      status: "Pending",
    };

    setTasks(prev => [...prev, newTask]);
    setTitle("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
