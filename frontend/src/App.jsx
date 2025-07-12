import { useEffect } from "react";
import AppRoutes from "./routes";
import useAuthStore from "./store/useAuthStore";
import { Toaster } from "react-hot-toast";
const App = () => {
  const rehydrate = useAuthStore((state) => state.rehydrate);

  useEffect(() => {
    rehydrate();
  }, []);
  return (
    <>
      <Toaster />
      <AppRoutes />
    </>
  );
};

export default App;
