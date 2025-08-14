import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-6">Recipe not found!</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Link
        to="/"
        className="text-blue-500 hover:underline mb-2 inline-block text-sm"
      >
        &larr; Back to Home
      </Link>

      <div className="bg-white rounded-md shadow p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full max-h-40 sm:max-h-48 object-cover mb-4 rounded"
        />

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-1">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            {recipe.ingredients
              ? recipe.ingredients.map((item, idx) => <li key={idx}>{item}</li>)
              : ["Ingredient list not available."]}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700 text-sm">
            {recipe.instructions
              ? recipe.instructions.map((step, idx) => <li key={idx}>{step}</li>)
              : ["Cooking instructions not available."]}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
