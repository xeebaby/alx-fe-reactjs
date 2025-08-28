import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // 🔹 simulate login status (change to true to allow access)

  return isAuthenticated ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;
