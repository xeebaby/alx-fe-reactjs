import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import ProfileDetails from "./components/ProfileDetails.jsx";
import ProfileSettings from "./components/ProfileSettings.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Profile Route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested routes */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
