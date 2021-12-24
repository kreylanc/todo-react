import React, { useState, useEffect, useRef } from "react";
import "./Form.css";
import nextId, { useId } from "react-id-generator";
import { MdOutlineCancel } from "react-icons/md";
import { RiArrowRightCircleLine } from "react-icons/ri";

function Form({ setTodos, todos, edit, updateTodo, resetEdit }) {
  const [inputText, setInputText] = useState(edit ? edit.task : "");

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      setTodos([
        ...todos,
        {
          id: nextId(),
          task: inputText,
          completed: false,
        },
      ]);
    } else {
      updateTodo(inputText, edit.id);
    }

    setInputText("");
  };

  return (
    <div className={`${edit ? "" : "form"}`}>
      <form onSubmit={formSubmit}>
        {edit ? (
          <div className="todo">
            <div className="content">
              <input
                type="text"
                className="todo-input"
                placeholder="Add a task"
                onChange={inputHandler}
                value={inputText}
                ref={inputRef}
              />
            </div>

            <div className="">
              <button className="btn-icon" type="submit">
                <RiArrowRightCircleLine className="icon" />
              </button>
              <button className="btn-icon" onClick={resetEdit}>
                <MdOutlineCancel className="icon" />
              </button>
            </div>
          </div>
        ) : (
          <>
            <input
              type="text"
              className="todo-input"
              placeholder="Add a task"
              onChange={inputHandler}
              value={inputText}
              ref={inputRef}
            />
            <button className="add-btn" type="submit">
              Add
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default Form;
