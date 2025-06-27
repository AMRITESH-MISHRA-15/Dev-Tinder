import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/default";
import { Suspense, lazy } from "react";

const AuthPage = lazy(() => import("../pages/AuthPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const FeedPage = lazy(() => import("../pages/FeedPage"));
const ProfileEditPage = lazy(() => import("../pages/ProfileEditPage"));
const LoadingPage = lazy(() => import("../pages/LoadingPage"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/edit" element={<ProfileEditPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
