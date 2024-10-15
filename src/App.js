import { Provider } from "react-redux";

import store from "./redux/store";

import "./App.css";
import AppRouter from "./router/AppRouter";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
