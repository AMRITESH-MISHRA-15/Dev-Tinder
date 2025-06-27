import { useEffect } from "react";
import AppRoutes from "./routes";
import useAuthStore from "./store/useAuthStore";
const App = () => {
    const rehydrate = useAuthStore((state) => state.rehydrate);

    useEffect(() => {
        rehydrate();
    },[])
    return <AppRoutes />
};

export default App;
