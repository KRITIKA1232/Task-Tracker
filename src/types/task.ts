export type TaskStatus = "Pending" | "Done";

export interface Task {
  id: number;
  title: string;
  dueDate: string;
  status: TaskStatus;
}