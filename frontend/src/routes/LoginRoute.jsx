// components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import LoadingPage from "../pages/LoadingPage";

const LoginRoute = () => {
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);
  if (loading) {
    return <LoadingPage />;
  }

  return !user ? <Outlet /> : <Navigate to="/" replace />;
};

export default LoginRoute;
