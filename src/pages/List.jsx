import React from "react";
import { Link } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/reducers/todoReducer";

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  // kısa yol
  // cost todos= useSelector(selectTodos) // reducer ıcınde tanımladıgımız kısa yol

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="home">
      <h1>TO DO LİST </h1>
      {todos.map((todo) => (
        <div className="list">
          <Link to={`/todos/${todo.id}`}>
            <p key={todo.id}>{todo.value}</p>
          </Link>
          <div className="icon-wrapper">
            <div onClick={() => handleDelete(todo.id)}>
              <FaDeleteLeft />
            </div>

            <Link to={`/todos/${todo.id}`}>
              {" "}
              <FaEdit />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
