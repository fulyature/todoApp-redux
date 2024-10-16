import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../redux/reducers/todoReducer";

const Edit = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const [inputValue, setInputValue] = useState("");

  const { id: routeId } = useParams();
  console.log(routeId);

  // Burda tam esıtlık kullanmıyoruz cunku route params strıng olarak gelıyor ve todo ıd sı number olarak gelıyor
  // O nedenle tam esıtlık yerıne == kullanıyoruz
  const currentTodo = todos.find((todo) => todo.id == routeId);
  // Eğer currentTodo varsa, inputValue'yu currentTodo'nun değeri ile güncelle
  useEffect(() => {
    if (currentTodo) {
      setInputValue(currentTodo.value); // Başlangıçta todo'nun değerini input'a set et
    }
  }, [currentTodo]);

  const handleEditClick = () => {
    if (currentTodo) {
      // Redux edit methoduna update edilmis yeni todo yu gonder
      dispatch(editTodo({ ...currentTodo, value: inputValue }));
      console.log("Todo updated:", { ...currentTodo, value: inputValue });
    }
  };
  return (
    <div>
      {currentTodo ? (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // input alanını güncellemek için
          />
          <FaPencil onClick={handleEditClick} />{" "}
          {/* Düzenleme butonunu tıklandığında */}
        </>
      ) : (
        <p>Todo not found</p> // Eğer todo bulunamazsa
      )}
    </div>
  );
};

export default Edit;
