import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "testtestesdfsfsd", // Bu sadece tanım ıcın,baska yerde kullanılmıyor
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      // Burada actıon ıle gonderdıgım parametrenın bır ıd oldugunu bılıyorum
      const deletedTodoId = action.payload;
      const newTodosArray = state.todos.filter(
        (todo) => todo.id !== deletedTodoId
      );

      state.todos = newTodosArray;
    },
  },
});

// OLusturdugumuz tum reducer actıonlarını burdan export edecegız.
// Yoksa uygulamada baska yerlerde kullanamayız!!!!!!
export const { setTodos, deleteTodo } = todoSlice.actions;

// Selectors, Secıcıler,
// Bu reducer ıcındekı degerlerı kolay okumamız ıcın bır yontem
export const selectTodos = (state) => state.todo.todos;

export default todoSlice.reducer;
