// import { useState } from 'react';
// import { useQuery } from 'react-query';
// import axios from 'axios';

// const fetchRecipes = async (query) => {
//   const { data } = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=636f9e8e04ac41e4a443d42190fc220e`);
//   return data;
// };

// const SearchBar = ({ setRecipes }) => {
//   const [query, setQuery] = useState('');

//   const { data, refetch } = useQuery(['recipes', query], () => fetchRecipes(query), {
//     enabled: false,
//   });

//   const handleSearch = () => {
//     refetch();
//     setRecipes(data.results);
//   };

//   return (
//     <div className="flex items-center justify-center p-4 bg-gray-100">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search for a recipe..."
//         className="p-2 border border-gray-300 rounded-lg"
//       />
//       <button onClick={handleSearch} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchBar;
