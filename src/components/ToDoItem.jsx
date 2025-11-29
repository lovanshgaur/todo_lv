// ./src/ToDoItem.jsx
function ToDoItem({ task, onDone, onDelete }) {
  const { id, text, completed } = task;
  return (
    <div className="todo-item">
      <h1 className={completed ? "on" : "off"} id={id}>
        {text}
      </h1>
      <div className="buttons">
        <button
          className="btn ghost"
          onClick={() => {
            onDone(id);
          }}
        >
          {completed ? "Undo" : "Done"}
        </button>

        {completed ? (
          <button
            className="btn ghost delete"
            onClick={() => {
              onDelete(id);
            }}
          >
            Delete
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ToDoItem;
