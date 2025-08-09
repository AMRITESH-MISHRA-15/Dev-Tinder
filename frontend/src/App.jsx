import Login from "@components/Login";
import Body from "@components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import appStore from "@utils/appStore";
import { Provider } from "react-redux";
import Feed from "@components/Feed";
import Profile from "@components/Profile";

function App() {
  return (
    <Provider store={appStore}>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Feed />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
