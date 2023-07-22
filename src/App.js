import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/dashboard/Dash";
import LogIn from "./Components/login/login";
import SignUp from "./Components/signup/signup";
import ProtectedRoute from "./hoc/ProtectedRoute";

function App() {
  return (
    <div style={{ fontFamily: " 'Inter', sans-serif" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
