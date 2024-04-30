import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Login setLoggedInUser={setLoggedInUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={<Dashboard loggedInUser={loggedInUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
