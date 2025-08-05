import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";


function RecipeDetails() {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(recipeId))
  );

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p><strong>ID:</strong> {recipe.id}</p> {/* <-- required */}
    </div>
  );
}

export default RecipeDetails;
