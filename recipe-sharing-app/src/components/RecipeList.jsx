import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // ✅ Whenever searchTerm changes, run filterRecipes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  const displayList = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      {displayList.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        displayList.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default RecipeList;
