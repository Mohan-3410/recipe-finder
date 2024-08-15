'use client';
import { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import useDebounce from '@/hooks/useDebounce';
import Card from "@/components/card";
import Loader from "@/components/loader";

const fetchRecipes = async ({ queryKey }) => {
  const [_, query] = queryKey;
  if (!query) return [];
  const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
    params: {
      query: query,
      apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
    },
  });
  return response.data.results;
};

export default function Search() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 1000);
  const { data: recipes = [], isLoading, isError, refetch } = useQuery({
    queryKey: ['recipes', debouncedQuery],
    queryFn: fetchRecipes,
    enabled: !!debouncedQuery,
  });

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    if (query) {
      refetch();
    }
  };

  return (
    <main className="flex-grow container mx-auto px-6 py-8">
      <section className="mb-8">
        <div className="mt-4 flex flex-col items-center">
          <input
            type="text"
            className="w-full md:w-1/2 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter an ingredient or dish name..."
            value={query}
            onChange={handleInputChange}
          />
          <button
            onClick={handleSearchClick}
            className="mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Search
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">Search Results</h2>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {recipes.length > 0 ? (
              recipes.map((recipe) => (
                <Card
                  key={recipe.id}
                  recipe={recipe}
                />
              ))
            ) : (
              <p className="text-muted-foreground ml-4 w-full">No recipes found. Try searching for something else.</p>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
