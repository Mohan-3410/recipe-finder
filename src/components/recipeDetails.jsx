const RecipeDetails = ({ recipe }) => {
    if (!recipe) return null;
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-lg mb-4" />
        <div>
          <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
          <ul className="list-disc pl-5">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Instructions</h3>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    );
  };
  
  export default RecipeDetails;
  