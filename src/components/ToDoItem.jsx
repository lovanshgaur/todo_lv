// ./src/ToDoItem.jsx
function ToDoItem({ task, onDone, onDelete }) {
  const { id, text, completed } = task;
  return (
    <div className="todo-item">
      <h1 className={completed ? "on" : "off"} id={id}>
        {text}
      </h1>

      <button
        onClick={() => {
          onDone(id);
        }}
      >
        {completed ? "Undo" : "Done"}
      </button>

      {completed ? <button onClick={()=>{onDelete(id)}}>Delete</button> : ""}
      
    </div>
  );
}

export default ToDoItem;
