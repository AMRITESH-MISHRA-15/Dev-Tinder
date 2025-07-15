import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/default";
import ProtectedRoute from "./ProtectedRoute";
import { Suspense, lazy } from "react";

const AuthPage = lazy(() => import("../pages/AuthPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const FeedPage = lazy(() => import("../pages/FeedPage"));
const ProfileEditPage = lazy(() => import("../pages/ProfileEditPage"));
const LoginRoute = lazy(() => import("./LoginRoute"));

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route element={<LoginRoute />}>
            <Route path="/auth" element={<AuthPage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/edit" element={<ProfileEditPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
