// components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const ProtectedRoute = () => {
  const user = useAuthStore((state) => state.user);
  
  
  return user ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
