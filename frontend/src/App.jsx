import Login from "@components/Login";
import Body from "@components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<p>Profile page</p>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
