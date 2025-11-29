// ./src/ToDoList.jsx

import { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import ToDoSearch from "./ToDoSearch";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskNum, setTaskNum] = useState(1);
  const [remainingTasks, setRemainingTasks] = useState(0);

  // prevents saving before loading completed
  const [hasLoaded, setHasLoaded] = useState(false);

  // -----------------------------
  // LOAD tasks from localStorage
  // -----------------------------
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      const parsed = JSON.parse(saved);
      setTasks(parsed);

      // calculate remaining tasks on load
      const remaining = parsed.filter((t) => !t.completed).length;
      setRemainingTasks(remaining);

      // next ID logic
      const maxId = parsed.length
        ? Math.max(...parsed.map((task) => task.id)) + 1
        : 1;
      setTaskNum(maxId);
    }
    setHasLoaded(true);
  }, []);

  // -----------------------------
  // SAVE tasks to localStorage
  // -----------------------------
  useEffect(() => {
    if (!hasLoaded) return; 
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, hasLoaded]);

  // -----------------------------
  // Core Task Functions
  // -----------------------------
  function handleDone(id) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);

    const remaining = newTasks.filter((t) => !t.completed).length;
    setRemainingTasks(remaining);
  }

  function handleDelete(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);

    const remaining = newTasks.filter((t) => !t.completed).length;
    setRemainingTasks(remaining);
  }

  function handleAdd(name) {
    if (!name.trim()) return;

    const newTask = { id: taskNum, text: name.trim(), completed: false };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);

    setTaskNum(taskNum + 1);

    const remaining = newTasks.filter((t) => !t.completed).length;
    setRemainingTasks(remaining);
  }

  function handleClearAll() {
    if (confirm("Clear all todos?")) {
      setTasks([]);
      setRemainingTasks(0);
    }
  }

  function handleClearTasks() {
    const newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);

    const remaining = newTasks.length;
    setRemainingTasks(remaining);
  }

  // -----------------------------
  // Render UI
  // -----------------------------
  return (
    <>
      <ToDoSearch onAdd={handleAdd} />

      <div className="todo-list">
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onDone={handleDone}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <footer>
        <p>{remainingTasks} items left</p>

        <div className="buttons">
          <button className="btn ghost" onClick={handleClearAll}>
            Clear All
          </button>
          <button className="btn ghost" onClick={handleClearTasks}>
            Clear Completed
          </button>
        </div>
      </footer>
    </>
  );
};

export default ToDoList;
