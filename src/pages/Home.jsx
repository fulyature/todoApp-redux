import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { selectTodos, setTodos } from "../redux/reducers/todoReducer";

function Home() {
  const genericId = uuidv4(); //Random bır ıd al
  const dispatch = useDispatch();

  const newTodo = {
    name: "Redux ögren",
    id: genericId,
  };

  const todos = useSelector(selectTodos);
  const handleAddTodo = () => {
    dispatch(setTodos(newTodo));
  };

  return (
    <div className="home-wrapper">
      <h1>Home</h1>

      <button onClick={handleAddTodo}>Add New Todo</button>
      {todos && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo?.name ?? "No name"}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
