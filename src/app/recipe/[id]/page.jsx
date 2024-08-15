'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function RecipeDetail({ params }) {
  const { id } = params;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.spoonacular.com/recipes/${id}/information`, {
          params: {
            apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
          },
        })
        .then((response) => {
          setRecipe(response.data);
        });
    }
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
        <div className="flex flex-col md:flex-row md:space-x-6">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full md:w-1/2 h-96 object-cover rounded-lg mb-4 md:mb-0"
          />
          <div className="w-full md:w-1/2">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Ingredients</h2>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {recipe.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id} className="mb-1">
                    {ingredient.original}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Instructions</h2>
              <div
                className="text-gray-700 mt-2"
                dangerouslySetInnerHTML={{ __html: recipe.instructions }}
              />
            </div>
          </div>
        </div>
      </main>
  );
}
