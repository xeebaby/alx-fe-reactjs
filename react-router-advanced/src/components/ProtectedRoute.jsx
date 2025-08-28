import { Navigate } from "react-router-dom";

// Simple auth hook to simulate login status
function useAuth() {
  // for demo, hardcode true/false
  const user = { loggedIn: true }; 
  return user && user.loggedIn;
}

function ProtectedRoute({ children }) {
  const isAuth = useAuth();

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
