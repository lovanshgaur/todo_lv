function ToDoItem({task, onDone}) {
  return (
    <>
    <h1>{task}</h1>
    <button onClick={()=>{onDone(task)}}>Done</button>      
    </>
  )
}

export default ToDoItem
