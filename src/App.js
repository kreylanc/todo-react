import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  const [todos, setTodos] = useState([]);

  //  run this useEffect only once when the component loads to get the data stored locally
  useEffect(() => {
    getLocalData();
  }, []);

  useEffect(() => {
    saveLocalData();
  }, [todos]);

  const saveLocalData = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalData = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localData = JSON.parse(localStorage.getItem("todos"));
      setTodos(localData);
    }
  };

  return (
    <div>
      <div className="app">
        <header>
          <h1>TO DO APP</h1>
        </header>
        <div className="todo-container">
          <Form setTodos={setTodos} todos={todos} />
          <Todolist setTodos={setTodos} todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
