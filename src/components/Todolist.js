import React from "react";
import Todo from "./Todo";
import "./Todolist.css";

function Todolist({ todos, setTodos }) {
  return (
    <div className="todolist">
      {todos.map((todo) => (
        <Todo todos={todos} todo={todo} key={todo.id} setTodos={setTodos} />
      ))}
    </div>
  );
}

export default Todolist;
