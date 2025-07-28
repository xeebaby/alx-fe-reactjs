import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import SearchBar from "./components/SearchBar"; 

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/favorites">Favorites</Link> |{" "}
        <Link to="/recommendations">Recommendations</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: "20px" }}>
              <h1>Recipe Sharing App</h1>
              <SearchBar /> {/* ✅ Search bar included */}
              <AddRecipeForm />
              <RecipeList />
            </div>
          }
        />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </Router>
  );
}

export default App;
