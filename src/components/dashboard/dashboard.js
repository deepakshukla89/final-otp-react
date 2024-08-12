import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useSelector((state) => state.login);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-screen flex items-center justify-center bg-emerald-500">
      <h1 className="text-white text-3xl">Welcome to my page</h1>
    </div>
  );
};

export default Dashboard;
