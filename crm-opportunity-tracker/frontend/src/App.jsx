import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import OpportunityForm from "./pages/OpportunityForm";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/create"
        element={
          <ProtectedRoute>
            <OpportunityForm />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit/:id"
        element={
          <ProtectedRoute>
            <OpportunityForm />
          </ProtectedRoute>
        }
      />

      <Route path="/login" element={<Login />} />

      <Route
        path="/register"
        element={<Register />}
      />
    </Routes>
  );
}

export default App;