import ToDoItem from "./ToDoItem";

const tasks = ["task 1", "task 2", "task 3", "task 4", "task 5"];
const ToDoList = () => {
  function handleDone(name) {
    console.log("Done", name);
  }
  return (
    <>
      {tasks.map((task, index) => (
        <ToDoItem key={index} task={task} onDone={handleDone} />
      ))}
    </>
  );
};

export default ToDoList;
