import { useSelector } from "react-redux";

import { selectTodos } from "../redux/reducers/todoReducer";

function Home() {
  const todos = useSelector(selectTodos);

  return (
    <div className="home-wrapper">
      <h1>TODO LIST</h1>

      {todos && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo?.value ?? "No name"}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
