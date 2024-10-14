import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./reducers/todoReducer";
import authReducer from "./reducers/authReducer";

export default configureStore({
  reducer: {
    // UYgulamada herhangi bir yerde bu 2 reducer state okuması yapılacaksa soldakı key ıle okunacak
    // Mesela, state.todo.todos ( todo asagıda solda verdıgımız ısım)
    todo: todoReducer,
    auth: authReducer,
  },
});
