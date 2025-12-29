# 📝 Task Tracker App (React + TypeScript)

A simple and efficient **Task Tracker application** built using **React, TypeScript, and Vite**.  
This project demonstrates clean component architecture, state management with hooks, debounced search, filtering, sorting, and data persistence using a mock API.

---

## 🚀 Features

- ➕ Add new tasks with title and due date
- 🗑️ Delete tasks
- 🔄 Update task status (Pending / Done)
- 🔍 Search tasks with **debounce** for performance
- 🎯 Filter tasks by status (All / Pending / Done)
- 🔃 Sort tasks by due date or name
- 💾 Persistent data using **localStorage (Mock API)**
- ⚡ Built with **React Hooks & TypeScript**

---

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **HTML & CSS**
- **localStorage (Mock API)**

---

## 🧠 Application Workflow

1. The application starts from `main.tsx`, which renders the `App` component.
2. `App.tsx` holds the main state for tasks, filters, search, and sorting.
3. UI components receive data and setter functions as props.
4. User actions (add, delete, update) modify state in `App.tsx`.
5. Changes are persisted using a mock API implemented with `localStorage`.
6. The UI automatically re-renders based on updated state.

---

## 🔧 Mock API Implementation

The mock API is implemented using `localStorage` inside a service layer.

**File:** `src/services/taskService.ts`

- `getTasks()` simulates fetching tasks (GET)
- `saveTasks(tasks)` simulates saving tasks (POST / PUT / DELETE)

This approach mimics real-world API behavior and keeps data logic separate from UI components.

---

## ⏱️ Debounced Search

A reusable custom hook `useDebounce` is implemented to delay search execution and improve performance by avoiding unnecessary re-renders on every keystroke.


### 1️⃣ Install dependencies
```bash
npm install
2️⃣ Run the development server
bash
Copy code
npm run dev
3️⃣ Open in browser
arduino
Copy code
http://localhost:5173
```

## 🌐 Live Demo

https://kriteekas-task-tracker.vercel.app/