import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todoReducer";
import { v4 as uuidv4 } from "uuid";

const Add = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const addNewTodo = () => {
    const newTodo = {
      id: uuidv4(),
      value: todo,
    };
    dispatch(addTodo(newTodo));
    setTodo("");
  };

  return (
    <>
      <div className="add-todo">
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Enter new todo..."
          className="input"
        />
        <button className="add-btn" onClick={addNewTodo}>
          ADD
        </button>
      </div>
    </>
  );
};

export default Add;
