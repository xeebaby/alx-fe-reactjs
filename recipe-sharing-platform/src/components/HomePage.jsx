import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipeData from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
        Recipe Sharing Platform
      </h1>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div className="bg-white rounded-md shadow hover:shadow-lg transform hover:scale-105 transition duration-200 overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-20 sm:h-24 md:h-28 lg:h-32 object-cover"
              />
              <div className="p-3">
                <h2 className="text-lg font-semibold mb-1">{recipe.title}</h2>
                <p className="text-gray-600 text-xs sm:text-sm">{recipe.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
