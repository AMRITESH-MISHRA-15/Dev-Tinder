import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/default";
import { AuthPage } from "../pages";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<div></div>} />
          <Route path="/auth" element={<AuthPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
