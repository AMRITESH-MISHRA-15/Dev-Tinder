import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/default";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<div></div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
