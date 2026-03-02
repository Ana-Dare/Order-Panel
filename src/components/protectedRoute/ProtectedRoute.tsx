import { useUserAuthContext } from "../../context/userAuthContext";
import Home from "../../screen/home";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isRegistered } = useUserAuthContext();
  return isRegistered ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
