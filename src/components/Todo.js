import React, { useState } from "react";
import Form from "./Form";
import "./Todo.css";
import { TiEdit, TiDelete } from "react-icons/ti";
import {
  RiCheckboxBlankLine,
  RiCheckboxLine,
  RiDeleteBinLine,
} from "react-icons/ri";

function Todo({ todos, todo, setTodos }) {
  const [edit, setEdit] = useState({});

  //  here todos is the array containing all the todo list
  //  while todo is one specific value from the todos array after mapping
  const deleteTodo = () => {
    //  filtering through todos array and keeping todo except the one whose delete button was clicked
    setTodos(todos.filter((val) => val.id !== todo.id));
  };

  //  this function is called from Form component
  const updateTodo = (text, id) => {
    //  changing the value of the object that matches with the id
    //  passed when 'edit' button was clicked and the rest remains the same
    const newTask = todos.map((todo) =>
      todo.id === id ? { ...todo, task: text } : todo
    );

    setTodos(newTask);

    resetEdit();
  };

  const resetEdit = () => {
    setEdit({
      id: null,
      task: "",
    });
  };

  const handleComplete = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  //  value of edit is empty but new value gets stored when the edit button is clicked
  if (edit.id) {
    return (
      <Form
        updateTodo={updateTodo}
        edit={edit}
        todos={todos}
        setTodos={setTodos}
        resetEdit={resetEdit}
      />
    );
  }

  return (
    <div className="todo">
      <div className="content">
        <div onClick={handleComplete} className="checkbox">
          {todo.completed ? <RiCheckboxLine /> : <RiCheckboxBlankLine />}
        </div>

        <h4 className={`${todo.completed ? "completed" : ""}`}>{todo.task}</h4>
      </div>

      <div className="buttons">
        <TiEdit className="btn-update" onClick={() => setEdit(todo)} />

        <RiDeleteBinLine className="btn-delete" onClick={deleteTodo} />
      </div>
    </div>
  );
}

export default Todo;
