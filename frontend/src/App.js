import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div>
      <Routes>
        <Route path="/" element={user ? <Navigate to="../home" /> : <Auth />} />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route path="/auth" element={user ? <Home /> : <Auth />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
