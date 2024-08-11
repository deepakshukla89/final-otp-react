// App.js
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import LoginForm from "./components/login/loginForm";

function App() {
  return (
    <Provider store={store}>
      <LoginForm />
    </Provider>
  );
}

export default App;
