'use client';
import { useSelector } from 'react-redux';
import Card from "@/components/card";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <main className="flex-grow container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-foreground cursive">Favorite Recipes</h2>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {favorites.map((recipe) => (
            <Card
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground ml-4 mt-4">You have no favorite recipes. Add some from the search page!</p>
      )}
    </main>
  );
}
