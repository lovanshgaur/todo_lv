// ./src/ToDoList.jsx

import { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "task 1", completed: false },
    { id: 2, text: "task 2", completed: false },
    { id: 3, text: "task 3", completed: false },
    { id: 4, text: "task 4", completed: false },
    { id: 5, text: "task 5", completed: false }
  ]);

  const [taskNum, setTaskNum] = useState(tasks.length + 1);
  const [remainingTasks, setremainingTasks] = useState(tasks.length);

  function handleDone(input) {
    console.log(input);
    const newTasks = tasks.map((task) =>
      task.id === input ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
    handleRemainingTasks(newTasks);
    console.log(newTasks)
  }
  function handleRemainingTasks(arr) {
    const completedTasks = arr.filter((task) => task.completed !== false);
    console.log(completedTasks);
    const newTasks = arr.filter((n) => !completedTasks.includes(n));
    const remainingTask = newTasks.length;
    console.log(remainingTask);
    setremainingTasks(remainingTask);
  }
  function handleDelete(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    console.log(newTasks);
    setTasks(newTasks);
  }

  function handleAdd(name) {
    if (name) {
      console.log(taskNum);
      const newTask = { id: taskNum, text: name, completed: false };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      setInput("");
      setTaskNum(taskNum + 1);
      console.log("Added", newTasks);
    } else {
      console.error("No task Added");
      //
    }
  }

  function handleClearTasks() {
    setTasks(newTasks);
    const newTasks = tasks.filter((n) => !completedTasks.includes(n));
    setTasks(newTasks);
  }

  const [input, setInput] = useState("");
  return (
    <>
      <h3>{remainingTasks}</h3>
      <p>{input}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleAdd(input)}>Add Task</button>
      <button onClick={() => handleClearAll()}>Clear All</button>
      <button onClick={() => handleClearTasks()}>Clear Completed</button>

      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          onDone={handleDone}
          onDelete={handleDelete}
        />
      ))}
    </>
  );
};

export default ToDoList;
