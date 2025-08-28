import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import BlogPost from "./components/BlogPost.jsx"; // ✅ dynamic route component

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router Advanced Example</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Protected Profile route */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* ✅ Dynamic route for blog */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
