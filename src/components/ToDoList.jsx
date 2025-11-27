import { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    "task 1",
    "task 2",
    "task 3",
    "task 4",
    "task 5"
  ]);

  function handleDone(name) {
    const newTasks = tasks.filter((task) => task !== name)
    setTasks(newTasks)
  }

  function addTask(name) {
    if (name) {
      console.log("Added", name);
      const newTasks = [...tasks, name];
      setTasks(newTasks)
      setInput('')
    } else {
      console.error("No task Added");
    }
  }

  const [input, setInput] = useState("");
  return (
    <>
      <p>{input}</p>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => addTask(input)}>Add Task</button>
      {tasks.map((task, index) => (
        <ToDoItem key={index} task={task} onDone={handleDone} />
      ))}
    </>
  );
};

export default ToDoList;
