import React from 'react';
import Link from 'next/link';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '@/redux/slice/favoriteSlice';


const Card = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((favorite) => favorite.id === recipe.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(recipe));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  return (
    <div className="relative bg-card hover:shadow-md rounded-lg overflow-hidden">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-card-foreground">{recipe.title}</h3>
        <p className="text-muted-foreground">A brief description of the recipe goes here...</p>
        <Link href={`/recipe/${recipe.id}`} className="mt-2 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-foreground hover:text-primary transition-colors">
          View Recipe
        </Link>
      </div>
      <div className="absolute top-2 right-2">
        <button onClick={toggleFavorite}>
          {isFavorite ? <AiFillHeart className="text-red-500 text-2xl" /> : <AiOutlineHeart className="text-primary shadow-xl text-2xl rounded-full" />}
        </button>
      </div>
    </div>
  );
};

export default Card;
