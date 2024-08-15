// const RecipeList = ({ recipes, setSelectedRecipe }) => {
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
//         {recipes.map((recipe) => (
//           <div
//             key={recipe.id}
//             className="p-4 border border-gray-300 rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
//             onClick={() => setSelectedRecipe(recipe)}
//           >
//             <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-lg mb-2" />
//             <h3 className="text-lg font-semibold">{recipe.title}</h3>
//             <p className="text-gray-600">{recipe.summary}</p>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default RecipeList;
  