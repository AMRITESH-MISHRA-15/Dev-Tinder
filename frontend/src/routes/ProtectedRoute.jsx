// components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const user = useAuthStore((state) => state.user);
  const rehydrate = useAuthStore((state) => state.rehydrate);
    useEffect(() => {
      rehydrate();
      console.log(user);
      
    }, []);
  
  return user ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
