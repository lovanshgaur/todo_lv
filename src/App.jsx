// ./App.jsx
import ToDoList from "./components/ToDoList";
import "./app.css";
// import ToDoSearch from "./components/ToDoSearch";

function App() {
  return (
    <>
      <div id="container">
        <div id="todo">
          <header>
            {/* <ToDoSearch /> */}
          </header>
          <ToDoList />
          <footer></footer>
        </div>
      </div>
    </>
  );
}

export default App;
