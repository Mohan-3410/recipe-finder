'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '@/components/loader';
import WithAuth from '../../../components/auth';
const RecipeDetail =({ params }) =>{
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

  if (!recipe) return <Loader />;

  return (
    <main className="flex-grow container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-6 cursive text-primary">{recipe.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-10">
        <div className="col-span-1 row-span-1 max-h-[45vh]">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover rounded-lg "
          />
        </div>
        <div className="col-span-1 row-span-1 max-h-[45vh] overflow-auto p-4  rounded-lg ">
          <h2 className="text-2xl font-semibold  mb-4 cursive">Ingredients</h2>
          <ul className="list-disc list-inside ">
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id} className="mb-2">
                {ingredient.original}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 row-span-1 max-h-[45vh] overflow-auto p-4  rounded-lg ">
          <h2 className="text-2xl font-semibold  mb-4 cursive">Instructions</h2>
          <div
            className=" leading-relaxed"
            dangerouslySetInnerHTML={{ __html: recipe.instructions }}
          />
        </div>
        <div className="col-span-1 row-span-1 max-h-[45vh] overflow-auto p-4  rounded-lg ">
          <h2 className="text-2xl font-semibold  mb-4 cursive">Additional Information</h2>
          <div className=" leading-relaxed">
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <p><strong>Preparation Time:</strong> {recipe.readyInMinutes} minutes</p>
            <p><strong>Source:</strong> <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{recipe.sourceName}</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WithAuth(RecipeDetail)
