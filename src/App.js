import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";
import LoginForm from "./components/login/loginForm";
import Dashboard from "./components/dashboard/dashboard";

const ProtectedRoute = ({ element }) => {
  const { user } = useSelector((state) => state.login);
  return user ? element : <Navigate to="/" />;
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
