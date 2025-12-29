import { useEffect, useState } from "react";
import { getTasks, saveTasks } from "./services/taskService";
import type { Task } from "./types/task";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"All" | "Pending" | "Done">("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"date" | "name">("date");

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const visibleTasks = tasks
    .filter(task => filter === "All" || task.status === filter)
    .filter(task =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sort === "name"
        ? a.title.localeCompare(b.title)
        : new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    );

  return (
    <div className="container">
      <h2>Task Tracker</h2>
      <TaskForm setTasks={setTasks} />
      <SearchBar setSearch={setSearch} />
      <FilterBar setFilter={setFilter} setSort={setSort} />
      <TaskList tasks={visibleTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;

