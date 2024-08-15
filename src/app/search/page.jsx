'use client';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { ThemeSwitcher } from '@/utils/themeSwitcher';
import Loader from "@/components/loader";
import Navbar from '@/components/home/navbar';
import Footer from '@/components/home/footer';

export default function Search() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchRecipes = async () => {
    if (!query) return;

    setLoading(true);

    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
          query: query,
          apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
        },
      });
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="flex-grow container mx-auto px-6 py-8">
        <section className="mb-8">
          <div className="mt-4 flex flex-col items-center">
            <input
              type="text"
              className="w-full md:w-1/2 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter an ingredient or dish name..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={searchRecipes}
              className="mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Search
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground">Search Results</h2>
          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {recipes.length > 0 ? (
                recipes.map((recipe) => (
                  <div key={recipe.id} className="bg-card hover:shadow-md rounded-lg overflow-hidden ">
                    <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-card-foreground">{recipe.title}</h3>
                      <p className="text-muted-foreground">A brief description of the recipe goes here...</p>
                      <Link href={`/recipe/${recipe.id}`} className="mt-2 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-foreground hover:text-primary transition-colors">
                        View Recipe
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground ml-4">No recipes found. Try searching for something else.</p>
              )}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
