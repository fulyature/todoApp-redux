import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "testtestesdfsfsd", // Bu sadece tanım ıcın,baska yerde kullanılmıyor
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;

      state.todos = [...state.todos, newTodo];
    },
    deleteTodo: (state, action) => {
      const deletedTodoID = action.payload;

      const updatedTodos = state.todos.filter((t) => t.id !== deletedTodoID);

      state.todos = updatedTodos;
    },
    editTodo: (state, action) => {

      const updatedTodo = action.payload;

      const updatedTodos = state.todos.map((t) => t.id === updatedTodo.id   ? updatedTodo : t );

      state.todos = updatedTodos;

    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
// OLusturdugumuz tum reducer actıonlarını burdan export edecegız.
// Yoksa uygulamada baska yerlerde kullanamayız!!!!!!

// Selectors, Secıcıler,
// Bu reducer ıcındekı degerlerı kolay okumamız ıcın bır yontem
export const selectTodos = (state) => state.todo.todos;

export default todoSlice.reducer;
